(function () {
  'use strict';
  var config = (window.SITE_CONFIG || {}).soundtrack || {};
  if (!config.enabled || !config.path) return;

  function init() {
    var dock = document.createElement('aside');
    dock.className = 'soundtrack';
    dock.setAttribute('aria-label', 'Site soundtrack');
    dock.innerHTML = '<button class="soundtrack-mix" type="button" aria-label="Soundtrack settings" aria-expanded="false" aria-controls="soundtrack-panel" title="Background music">'
      + '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
      + '<path d="M11 5 6 9H3v6h3l5 4V5Z"/>'
      + '<path class="soundtrack-wave" d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>'
      + '<path class="soundtrack-muted" d="m16 9 5 6m0-6-5 6"/></svg></button>'
      + '<div class="soundtrack-panel" id="soundtrack-panel" hidden><div class="soundtrack-row">'
      + '<div class="soundtrack-copy"><span class="soundtrack-title"></span></div>'
      + '<button class="soundtrack-toggle" type="button" aria-pressed="false">Sound on</button>'
      + '</div><div class="soundtrack-bottom">'
      + '<p class="soundtrack-status" role="status" aria-live="polite" aria-atomic="true"></p>'
      + '<button class="soundtrack-resume" type="button" aria-label="Resume background music" hidden>Resume</button></div>'
      + '<div class="soundtrack-volume-row"><label for="soundtrack-volume">Volume</label>'
      + '<input id="soundtrack-volume" type="range" min="0" max="100" step="5"></div></div>';
    document.body.appendChild(dock);
    var title = dock.querySelector('.soundtrack-title');
    var toggle = dock.querySelector('.soundtrack-toggle');
    var mix = dock.querySelector('.soundtrack-mix');
    var panel = dock.querySelector('.soundtrack-panel');
    var status = dock.querySelector('.soundtrack-status');
    var resume = dock.querySelector('.soundtrack-resume');
    var slider = dock.querySelector('input');
    title.textContent = config.title || 'Site soundtrack';

    var prefKey = 'ths-sound-v1';
    var volumeKey = 'ths-volume-v1';
    function read(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
    function write(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
    var preference = read(prefKey);
    var wanted = preference === 'on';
    var storedVolume = read(volumeKey);
    var volume = storedVolume === null ? Number(config.volume) : Number(storedVolume);
    if (!Number.isFinite(volume)) volume = 0.65;
    volume = Math.max(0, Math.min(1, volume));
    slider.value = String(Math.round(volume * 100));

    // No soundtrack bytes are requested until sound is enabled.
    var music = document.createElement('audio');
    music.id = 'site-soundtrack-audio';
    music.preload = 'none';
    music.loop = true;
    music.setAttribute('playsinline', '');
    music.setAttribute('aria-hidden', 'true');
    document.body.appendChild(music);
    var context = null, gain = null, graphAttempted = false;
    var holds = new Map();
    var playing = false, loading = false, needsGesture = false, failed = false;
    var attempt = 0;
    function blocked() { return holds.size > 0 || document.hidden; }

    function render() {
      dock.dataset.playing = String(playing);
      mix.setAttribute('aria-label', 'Music controls: ' + (playing ? 'sound on' : 'sound off'));
      mix.title = playing ? 'Background music is on' : 'Background music';
      toggle.textContent = failed ? 'Retry' : wanted ? 'Sound off' : 'Sound on';
      toggle.setAttribute('aria-pressed', String(wanted));
      toggle.setAttribute('aria-label', wanted ? 'Turn background music off' : 'Turn background music on');
      resume.hidden = !wanted || (holds.size === 0 && !needsGesture);
      resume.textContent = needsGesture && holds.size === 0 ? 'Play' : 'Resume';
      status.textContent = failed ? 'Track unavailable'
        : !wanted ? 'Music off'
        : blocked() ? 'Music paused'
        : loading ? 'Loading'
        : playing ? (volume === 0 ? 'Muted' : 'Music playing')
        : 'Music paused';
    }

    function setupGraph() {
      if (graphAttempted) return;
      graphAttempted = true;
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) { music.volume = volume; return; }
      try {
        context = new AudioContext();
        gain = context.createGain();
        gain.gain.value = 0;
        context.createMediaElementSource(music).connect(gain);
        gain.connect(context.destination);
      } catch (_) { context = null; gain = null; music.volume = volume; }
    }
    function setLevel(level, seconds) {
      if (gain) {
        var now = context.currentTime;
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(gain.gain.value, now);
        gain.gain.linearRampToValueAtTime(level, now + seconds);
      } else { music.volume = level; }
    }
    function stop() {
      attempt++;
      loading = false;
      playing = false;
      setLevel(0, 0);
      music.pause();
      render();
    }
    function start() {
      if (!wanted || blocked() || playing || loading) { render(); return; }
      failed = false;
      needsGesture = false;
      loading = true;
      var token = ++attempt;
      setupGraph();
      setLevel(0, 0);
      if (!music.getAttribute('src')) music.src = config.path;
      // Resume the context and start the media inside the same user gesture.
      var contextReady = context ? context.resume() : Promise.resolve();
      var mediaReady;
      try { mediaReady = music.play(); } catch (error) { mediaReady = Promise.reject(error); }
      render();
      Promise.all([contextReady, mediaReady]).then(function () {
        if (token !== attempt) return;
        if (!wanted || blocked()) { stop(); return; }
        loading = false;
        playing = true;
        setLevel(volume, 1.4);
        render();
      }).catch(function (error) {
        if (token !== attempt) return;
        stop();
        if (error && error.name === 'NotAllowedError') { needsGesture = true; }
        else if (!error || error.name !== 'AbortError') { failed = true; wanted = false; }
        render();
      });
    }
    function hold(key, pause) {
      holds.set(key, pause || function () {});
      stop();
    }
    function release(key) {
      if (!holds.delete(key)) return;
      if (!blocked() && wanted) start();
      else render();
    }
    window.Soundtrack = { hold: hold, release: release };

    toggle.addEventListener('click', function () {
      wanted = !wanted;
      preference = wanted ? 'on' : 'off';
      write(prefKey, preference);
      failed = false;
      if (wanted) start(); else stop();
    });
    resume.addEventListener('click', function () {
      // Deliberate return to the music pauses any on-page episode first.
      holds.forEach(function (pause) { try { pause(); } catch (_) {} });
      holds.clear();
      start();
    });
    mix.addEventListener('click', function () {
      panel.hidden = !panel.hidden;
      mix.setAttribute('aria-expanded', String(!panel.hidden));
    });
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !dock.contains(e.target)) {
        panel.hidden = true;
        mix.setAttribute('aria-expanded', 'false');
      }
    });
    dock.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) {
        panel.hidden = true;
        mix.setAttribute('aria-expanded', 'false');
        mix.focus();
      }
    });
    slider.addEventListener('input', function () {
      volume = Number(slider.value) / 100;
      write(volumeKey, String(volume));
      if (playing) setLevel(volume, 0.12);
      render();
    });

    // Native media always wins, including players added after page load.
    document.addEventListener('play', function (e) {
      if (e.target === music || !/^(AUDIO|VIDEO)$/.test(e.target.tagName)) return;
      hold(e.target, function () { e.target.pause(); });
    }, true);
    document.addEventListener('ended', function (e) { if (e.target !== music) release(e.target); }, true);
    // A paused episode stays quiet until it ends or the visitor resumes music.
    function externalMedia(target) {
      var link = target && target.closest ? target.closest('a[href]') : null;
      if (!link) return false;
      try {
        var host = new URL(link.href, location.href).hostname;
        return /(^|\.)(youtube\.com|youtube-nocookie\.com|youtu\.be|spotify\.com|anchor\.fm|podcasts\.apple\.com|music\.apple\.com|soundcloud\.com|vimeo\.com|instagram\.com|tiktok\.com)$/.test(host);
      } catch (_) { return false; }
    }
    document.addEventListener('click', function (e) {
      if (externalMedia(e.target)) hold('external');
    }, true);
    document.addEventListener('auxclick', function (e) {
      if (e.button === 1 && externalMedia(e.target)) hold('external');
    }, true);
    document.addEventListener('contextmenu', function (e) {
      if (externalMedia(e.target)) hold('external');
    }, true);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop();
      else if (wanted && !blocked()) start();
    });
    window.addEventListener('pagehide', stop);
    window.addEventListener('pageshow', function () { if (wanted && !blocked()) start(); });
    // Respect a mute preference made in another tab of this site.
    window.addEventListener('storage', function (e) {
      if (e.key === prefKey && e.newValue === 'off') {
        preference = 'off'; wanted = false; stop();
      }
    });
    music.addEventListener('pause', function () { playing = false; render(); });
    music.addEventListener('error', function () {
      failed = true; wanted = false; stop(); music.removeAttribute('src');
    });
    music.addEventListener('playing', function () {
      if (!wanted || blocked()) { stop(); return; }
      if (!loading) { playing = true; setLevel(volume, 1.4); render(); }
    });
    // Only a previously opted-in visitor can start on a general interaction.
    function unlock(e) {
      if (!wanted || !needsGesture || blocked() || dock.contains(e.target)) return;
      if (externalMedia(e.target) || (e.target.closest && e.target.closest('button,input,select,textarea,video,audio,iframe'))) return;
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      start();
    }
    document.addEventListener('click', unlock);
    document.addEventListener('keydown', unlock);
    render();
    if (wanted) start();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
