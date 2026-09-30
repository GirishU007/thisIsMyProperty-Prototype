
(function(){
  "use strict";

  /* ---------- shared markup ---------- */
  var LOGO = '<svg class="brand-mark"><use href="#i-logo"/></svg>'
    + '<span class="brand-txt"><span class="brand-name">ThisIs<em>My</em>Property<span style="color:var(--slate)">.com</span></span>'
    + '<span class="brand-tag">Your home&rsquo;s health at your fingertips.&trade;</span></span>';

  var PUBNAV = [
    {k:'home',   t:'Homeowners', href:'#/ho'},
    {k:'agents', t:'Agents',     href:'#/agents'},
    {k:'brokers',t:'Brokers &amp; Teams', href:'#/brokers', soon:'Coming Soon!'},
    {k:'how',    t:'How It Works', href:'#/how'},
    {k:'providers',t:'Service Providers', href:'#/providers/homeowners',
     menu:[{t:'Homeowners', href:'#/providers/homeowners'},{t:'Service Providers', href:'#/providers'}]},
    {k:'pricing',t:'Pricing',    href:'#/pricing',
     menu:[{t:'Homeowners', href:'#/pricing'},{t:'Agents', href:'#/pricing/agents'}]},
    {k:'mission',t:'Our Mission', href:'#/mission', sub:'For the Greater Good'}
  ];

  function pubnav(active){
    /* the CTAs follow the audience: agent pages sign in to the agent app */
    var isAg = (active === 'agents' || active === 'reg-agent');
    var tryHref = isAg ? '#/register/agent' : '#/try';
    var inHref  = isAg ? '#/agent' : '#/ho';
    var links = PUBNAV.map(function(n){
      if(n.soon && !n.href) return '<span class="navlink is-soon">'+n.t+'<small>'+n.soon+'</small></span>';
      var on = (n.k===active) ? ' is-on' : '';
      var sub = n.sub ? '<small style="color:var(--teal-deep)">'+n.sub+'</small>'
              : (n.soon ? '<small>'+n.soon+'</small>' : '');
      var link = '<a class="navlink'+on+'" href="'+n.href+'">'+n.t+sub
               + (n.menu ? ' <svg width="10" height="10" style="margin-left:4px"><use href="#i-chevd"/></svg>' : '')
               + '</a>';
      if(!n.menu) return link;
      return '<span class="navitem" data-navitem>'+link+'<span class="navmenu">'
           + n.menu.map(function(m){ return '<a href="'+m.href+'">'+m.t+'</a>'; }).join('')
           + '</span></span>';
    }).join('');
    return '<header class="topnav"><div class="topnav-in">'
      + '<a class="brand" href="#/home" aria-label="ThisIsMyProperty.com home">'+LOGO+'</a>'
      + '<nav class="navlinks">'+links+'</nav>'
      + '<div class="nav-cta"><a class="btn-try" href="'+tryHref+'">Try it free</a>'
      + '<a class="signin" href="'+inHref+'"><svg width="14" height="14"><use href="#i-badge"/></svg> Sign In</a></div>'
      + '</div></header>';
  }

  var FOOTCOLS = '<div><h5>Product</h5><ul>'
    + '<li><a href="#/how">How It Works</a></li><li><a href="#/home">Features</a></li>'
    + '<li><a href="#/pricing">Pricing</a></li><li><a href="#/home">Security</a></li></ul></div>'
    + '<div><h5>Resources</h5><ul><li><span class="soon-link">Resource Library</span></li>'
    + '<li><span class="soon-link">Help Center</span></li><li><span class="soon-link">Blog</span></li>'
    + '<li><span class="soon-link">System Guides</span></li></ul></div>'
    + '<div><h5>Company</h5><ul><li><a href="#/mission">About Us</a></li><li><a href="#/mission">Careers</a></li>'
    + '<li><a href="#/mission">Press</a></li><li><a href="#/mission">Contact Us</a></li></ul></div>'
    + '<div><h5>For Professionals</h5><ul><li><a href="#/agents">Agents</a></li>'
    + '<li><a href="#/brokers">Brokers &amp; Teams</a></li>'
    + '<li><span class="soon">Coming Soon!</span></li>'
    + '<li><a href="#/providers">Service Providers</a></li>'
    + '<li><a href="#/pricing">Business Partners</a></li></ul>'
    + '<h5 style="margin-top:14px">Follow Us</h5><div class="social">'
    + '<a href="#/home" aria-label="Facebook"><svg width="14" height="14"><use href="#i-fb"/></svg></a>'
    + '<a href="#/home" aria-label="LinkedIn"><svg width="14" height="14"><use href="#i-in"/></svg></a>'
    + '<a href="#/home" aria-label="Instagram"><svg width="14" height="14"><use href="#i-ig"/></svg></a>'
    + '<a href="#/home" aria-label="YouTube"><svg width="14" height="14"><use href="#i-yt"/></svg></a></div></div>';

  function pubfoot(){
    return '<footer class="footer"><div class="footer-in">'
      + '<div><a class="brand" href="#/home">'+LOGO+'</a>'
      + '<p class="tiny muted" style="margin-top:12px">&copy; 2026 ThisIsMyProperty.com.<br>All rights reserved.</p></div>'
      + FOOTCOLS + '</div>'
      + '<div class="footer-legal"><span>Your home&rsquo;s health at your fingertips.&trade;</span>'
      + '<span><a href="#/home">Privacy Policy</a> &nbsp;|&nbsp; <a href="#/home">Terms of Service</a></span></div></footer>';
  }

  function appfoot(){
    return '<footer class="footer" style="padding:26px 24px 20px"><div class="footer-in">'
      + '<div><a class="brand" href="#/home">'+LOGO+'</a>'
      + '<p class="tiny muted" style="margin-top:12px">&copy; 2026 ThisIsMyProperty.com.<br>All rights reserved.</p></div>'
      + FOOTCOLS + '</div></footer>';
  }

  /* ---------- sidebars ---------- */
  var HO_PROPS = [
    {t:'123 Happiness St', href:'#/ho',         on:true},
    {t:'245 Peaceful Ln',  href:'#/ho/profile'},
    {t:'1117 Humble Way',  href:'#/ho/profile'}
  ];
  var HO_NAV = [
    {k:'dash',     t:'My Dashboard',          i:'i-home',        href:'#/ho'},
    {k:'profile',  t:'My Properties',         i:'i-home-health', href:'#/ho/profile', props:true},
    {k:'vault',    t:'My Vault',              i:'i-folder',      href:'#/ho/vault'},
    {k:'alerts',   t:'My Alerts',             i:'i-bell',        href:'#/ho/alerts', badge:'2'},
    {k:'reports',  t:'My Reports',            i:'i-chart',       href:'#/ho/reports'},
    {k:'estimate', t:'Request Price Estimate',i:'i-dollar',      href:'#/ho/estimate'}
  ];
  var HO_NAV2 = [
    {k:'resources',t:'Resources',             i:'i-book',   href:'#/ho/resources'},
    {k:'providers',t:'Service Providers',     i:'i-users',  href:'#/ho/providers'},
    {k:'refer',    t:'Refer a Friend<br>or Realtor', i:'i-gift', stub:'Refer a Friend or Realtor'}
  ];
  var AG_NAV = [
    {k:'dash',     t:'My Dashboard',          i:'i-home',      href:'#/agent'},
    {k:'clients',  t:'My Clients',            i:'i-users',     href:'#/agent/clients'},
    {k:'vaults',   t:'My Property Vaults',    i:'i-case',      href:'#/agent/vaults'},
    {k:'activity', t:'My Activity',           i:'i-activity',  stub:'My Activity'},
    {k:'alerts',   t:'My Alerts',             i:'i-bell',      href:'#/agent/alerts', badge:'3'},
    {k:'mkt',      t:'My Marketing Center',   i:'i-megaphone', href:'#/agent/marketing'},
    {k:'reports',  t:'My Reports',            i:'i-doc',       stub:'My Reports'}
  ];
  var AG_NAV2 = [
    {k:'resources',t:'Resources',             i:'i-book',      href:'#/agent/resources'},
    {k:'vendors',  t:'Service Providers',     i:'i-tools',     href:'#/agent/providers'}
  ];

  /* ---------- sidebar builder ----------
     Two layouts, each following its own approved mockup: the homeowner app
     (plan chip, Add New, Refer a Friend, Help) and the agent app. */
  function navItem(n, active){
    var on = (n.k === active) ? ' is-on' : '';
    var badge = n.badge ? '<span class="pill num">' + n.badge + '</span>' : '';
    var chev = n.props
      ? '<svg class="chevx" width="12" height="12"><use href="#i-chevd"/></svg>' : '';
    var body = '<svg class="ic" width="19" height="19"><use href="#' + n.i + '"/></svg> ' + n.t + badge + chev;
    return n.stub
      ? '<button class="snav' + on + '" style="width:auto;text-align:left" data-stub="' + n.stub + '">' + body + '</button>'
      : '<a class="snav' + on + '" href="' + n.href + '">' + body + '</a>';
  }

  function buildSidebar(kind, active){
    if(kind === 'agent'){
      var h = '<aside class="side side-agent">'
        + '<a class="side-brand" href="#/home" aria-label="ThisIsMyProperty.com home">' + LOGO + '</a>';
      AG_NAV.forEach(function(n){ h += navItem(n, active); });
      h += '<div class="side-sep"></div>';
      AG_NAV2.forEach(function(n){ h += navItem(n, active); });
      return h + '<div class="side-sep"></div>'
        + '<a class="snav-mission" href="#/mission"><svg class="ic" width="24" height="24" style="color:var(--side-accent)"><use href="#i-heart-fill"/></svg>'
        + '<div><b style="color:var(--side-accent)">OUR MISSION:</b><span>The Greater Good.</span></div></a>'
        + navItem({k:'refer', t:'Refer a Friend<br>or Realtor', i:'i-gift', stub:'Refer a Friend or Realtor'}, active)
        + '<div class="side-sep"></div>'
        + '<button class="snav" style="width:auto;text-align:left" data-stub="Help"><svg class="ic" width="19" height="19"><use href="#i-help"/></svg> Help</button>'
        + '</aside>';
    }

    var html = '<aside class="side">'
      + '<a class="side-brand" href="#/home" aria-label="ThisIsMyProperty.com home">' + LOGO + '</a>'
      + '<div class="side-sep" style="margin-top:2px"></div>';

    HO_NAV.forEach(function(n){
      html += navItem(n, active);
      if(n.props){
        html += '<div class="snav-sub" data-props>'
             +  HO_PROPS.map(function(p){
                  return '<a class="subnav' + (p.on ? ' is-on' : '') + '" href="' + p.href + '">'
                       + '<svg class="ic" width="15" height="15"><use href="#i-home"/></svg> ' + p.t + '</a>';
                }).join('')
             +  '</div>';
      }
      if(n.k === 'vault'){
        html += '<a class="snav-add" href="#/ho/add">'
             +  '<svg width="19" height="19"><use href="#i-plus-circle"/></svg> Add New</a>';
      }
    });

    html += '<div class="side-sep"></div>'
      + '<a class="snav-mission ho-mission" href="#/mission"><svg class="ic" width="22" height="22"><use href="#i-heart-hand"/></svg>'
      + '<div><b style="color:var(--side-accent)">OUR MISSION:</b><span>The Greater Good</span></div></a>'
      + '<div class="side-sep"></div>';

    HO_NAV2.forEach(function(n){ html += navItem(n, active); });

    return html
      + '<div class="side-sep"></div>'
      + '<button class="snav" style="width:auto;text-align:left" data-stub="Settings"><svg class="ic" width="19" height="19"><use href="#i-cog"/></svg> Settings</button>'
      + '<button class="snav" style="width:auto;text-align:left" data-stub="Help"><svg class="ic" width="19" height="19"><use href="#i-help"/></svg> Help</button>'
      + '</aside>';
  }

  /* ---------- hydrate shells ---------- */
  document.querySelectorAll('[data-pubnav]').forEach(function(el){
    el.outerHTML = pubnav(el.getAttribute('data-pubnav'));
  });
  document.querySelectorAll('[data-pubfoot]').forEach(function(el){ el.outerHTML = pubfoot(); });
  document.querySelectorAll('[data-appfoot]').forEach(function(el){ el.outerHTML = appfoot(); });
  document.querySelectorAll('[data-side]').forEach(function(el){
    el.outerHTML = buildSidebar(el.getAttribute('data-side'), el.getAttribute('data-active'));
  });

  /* ---------- router ----------
     Runs FIRST and on its own. Every screen is display:none until this adds
     .is-active, so nothing below may be allowed to prevent it from running. */
  var screens = Array.prototype.slice.call(document.querySelectorAll('.screen'));
  function routeOf(){
    var h = (location.hash || '').replace(/^#/, '');
    return h && h.charAt(0) === '/' ? h : '/home';
  }
  function render(){
    var r = routeOf(), found = false;
    screens.forEach(function(s){
      var on = (s.getAttribute('data-route') === r);
      if(on) found = true;
      s.classList.toggle('is-active', on);
    });
    if(!found){
      screens.forEach(function(s){ s.classList.toggle('is-active', s.getAttribute('data-route') === '/home'); });
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', render);
  render();
  document.documentElement.className += ' js-ready';

  /* ---------- everything below is optional polish ----------
     Wrapped so that a failure in any one enhancement leaves the prototype
     usable rather than blanking the page. */
  try {

    /* print buttons */
    document.addEventListener('click', function(e){
      var b = e.target && e.target.closest && e.target.closest('[data-print]');
      if(!b) return;
      e.preventDefault();
      try { window.print(); } catch(err) {}
    });

    /* homeowner sidebar: collapse / expand the property list */
    document.addEventListener('click', function(e){
      if(!e.target || !e.target.closest) return;
      var chev = e.target.closest('.chevx');
      if(!chev) return;
      e.preventDefault(); e.stopPropagation();
      var link = chev.closest('.snav');
      var list = link && link.nextElementSibling;
      if(!link || !list || !list.hasAttribute('data-props')) return;
      link.classList.toggle('is-shut');
      list.classList.toggle('is-shut');
    }, true);

    /* pricing tabs: scroll to the matching row */
    document.addEventListener('click', function(e){
      if(!e.target || !e.target.closest) return;
      var tab = e.target.closest('[data-ptab]');
      if(!tab) return;
      e.preventDefault();
      document.querySelectorAll('[data-ptab]').forEach(function(t){ t.classList.toggle('is-on', t === tab); });
      var row = document.getElementById('prow-' + tab.getAttribute('data-ptab'));
      if(row && row.scrollIntoView) row.scrollIntoView({behavior:'smooth', block:'start'});
    });

    /* screen index sheet */
    var sheet = document.getElementById('sheet');
    var fab = document.getElementById('fab');
    var sheetX = document.getElementById('sheet-x');
    if(sheet && fab && sheetX){
      fab.addEventListener('click', function(){ sheet.classList.add('is-open'); });
      sheetX.addEventListener('click', function(){ sheet.classList.remove('is-open'); });
      sheet.addEventListener('click', function(e){
        if(e.target === sheet || (e.target.closest && e.target.closest('.idx'))) sheet.classList.remove('is-open');
      });
      document.addEventListener('keydown', function(e){ if(e.key === 'Escape') sheet.classList.remove('is-open'); });
    }

    /* app drawer for narrow screens / iPad portrait */
    var scrim = document.createElement('div');
    scrim.className = 'navscrim';
    document.body.appendChild(scrim);

    document.querySelectorAll('.appbar').forEach(function(bar){
      var b = document.createElement('button');
      b.className = 'menubtn';
      b.setAttribute('aria-label', 'Open navigation menu');
      b.innerHTML = '<svg width="20" height="20"><use href="#i-menu"/></svg>';
      bar.insertBefore(b, bar.firstChild);
    });

    function closeNav(){ document.body.classList.remove('nav-open'); }
    document.addEventListener('click', function(e){
      if(!e.target || !e.target.closest) return;
      if(e.target.closest('.menubtn')){ document.body.classList.add('nav-open'); return; }
      if(e.target.closest('.navscrim')){ closeNav(); return; }
      if(e.target.closest('.side a, .side button')){ closeNav(); }
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeNav(); });
    window.addEventListener('hashchange', closeNav);

    /* ---------- top-nav dropdown (tap to open on touch) ---------- */
    document.addEventListener('click', function(e){
      if(!e.target || !e.target.closest) return;
      var item = e.target.closest('[data-navitem]');
      Array.prototype.forEach.call(document.querySelectorAll('[data-navitem]'), function(o){
        if(o !== item) o.classList.remove('is-open');
      });
      if(item && e.target.closest('.navitem > .navlink')){
        e.preventDefault();
        item.classList.toggle('is-open');
      }
    });
    window.addEventListener('hashchange', function(){
      Array.prototype.forEach.call(document.querySelectorAll('[data-navitem]'), function(o){
        o.classList.remove('is-open');
      });
    });

    /* ---------- plan picker on the registration screens ---------- */
    document.addEventListener('click', function(e){
      var b = e.target.closest && e.target.closest('[data-plan]');
      if(!b) return;
      var box = b.parentNode;
      Array.prototype.forEach.call(box.querySelectorAll('[data-plan]'), function(o){
        o.classList.toggle('is-on', o === b);
      });
    });

    /* controls with no destination in this demo do nothing */
    document.addEventListener('click', function(e){
      if(!e.target || !e.target.closest) return;
      if(e.target.closest('[data-stub]')) e.preventDefault();
    });

  } catch (err) {
    if (window.console && console.warn) console.warn('prototype enhancement skipped:', err);
  }
})();


