__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var t=class extends a(d[3]).Component{constructor(...t){super(...t),this.$OneTapUpsell1=(()=>{const{next:t}=this.props;try{r(d[1]).redirect(null!=t&&''!==t?t:'/')}catch(t){r(d[1]).redirect('/')}})}componentDidMount(){r(d[2]).logLoginEvent({event_name:'one_tap_login_dialog_show'})}render(){const t=a(d[3]).createElement(i(d[4]),{handleNextStep:this.$OneTapUpsell1});return r(d[5]).isMobile()?a(d[3]).createElement(i(d[6]),{className:"qhGB0",hideFooter:!0,pageIdentifier:i(d[7]).OneTapUpsellPage},t):a(d[3]).createElement(i(d[8]),{pageIdentifier:i(d[7]).OneTapUpsellPage},a(d[3]).createElement(r(d[9]).Box,{alignItems:"center",flex:"grow",justifyContent:"center"},a(d[3]).createElement(r(d[9]).Box,{border:!0,color:"ig-primary-background",dangerouslySetClassName:{__className:"qhGB0"}},t)))}};e.default=t},17825792,[17825793,20447619,20447644,3,17825794,20447239,10747905,20447450,20250785,20512813]);
__d(function() {},17825793,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var n=r(d[9]).connect(function(n){return{requestInFlight:n.oneTap.requestInFlight}},function(n){return{onRememberLoginClick(t){n(r(d[8]).oneTapLoginGetNonce(t))}}})(class extends a(d[3]).Component{constructor(...n){super(...n),this.$SaveLoginInfo1=(()=>{r(d[2]).logLoginEvent({event_name:'one_tap_login_optin'}),this.props.onRememberLoginClick(this.props.handleNextStep)}),this.$SaveLoginInfo2=(()=>{r(d[2]).logLoginEvent({event_name:'one_tap_login_notnow'}),this.props.handleNextStep()})}$SaveLoginInfo3(){return a(d[3]).createElement("div",null,a(d[3]).createElement("span",{className:"coreSpriteKeyhole"}))}render(){const n=r(d[4]).isWindowsPWA()?r(d[5]).ONE_TAP_LOGIN_BODY_POST_REG_LOGIN_APP:r(d[5]).ONE_TAP_LOGIN_BODY_POST_REG_LOGIN;return a(d[3]).createElement(r(d[6]).Box,{marginBottom:4,marginTop:4},a(d[3]).createElement(i(d[7]),{bodyText:n,buttonText:r(d[5]).ONE_TAP_LOGIN_REMEMBER_POST_REG_LOGIN,headerText:r(d[5]).ONE_TAP_LOGIN_TITLE_POST_REG_LOGIN,icon:this.$SaveLoginInfo3(),isProcessing:this.props.requestInFlight,onButtonClick:this.$SaveLoginInfo1}),a(d[3]).createElement("div",{className:"cmbtv"},a(d[3]).createElement(r(d[6]).Button,{borderless:!0,onClick:this.$SaveLoginInfo2},r(d[5]).ONE_TAP_LOGIN_CANCEL)))}});e.default=n},17825794,[17825795,20512883,20447644,3,20447239,20512812,20512813,11141238,20447705,5]);
__d(function() {},17825795,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=t=>a(d[1]).createElement("section",{className:i(d[2])("ABCxa",t.className)},a(d[1]).createElement("div",{className:"JErX0"},a(d[1]).createElement("div",{className:"ig3mj"},t.icon),a(d[1]).createElement("div",{className:"olLwo"},t.headerText),a(d[1]).createElement("div",{className:"f5C5x"},t.bodyText),!t.hideAction&&a(d[1]).createElement(r(d[3]).Button,{disabled:t.buttonDisabled,loading:t.isProcessing,onClick:t.onButtonClick},t.buttonText),t.footer));t.defaultProps={hideAction:!1};var c=t;e.default=c},11141238,[11141239,3,20512819,20512813]);
__d(function() {},11141239,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);e.default=class extends a(d[2]).Component{$PlainShell1(){return a(d[2]).createElement("div",{className:"paRpx coreSpriteMobileNavTypeLogo"})}render(){const{children:t,headerText:l,hideFooter:n,mobileLeftAction:o,mobileRightAction:s,pageIdentifier:c,title:h}=this.props;return a(d[2]).createElement(i(d[3]),{footerElement:n?null:void 0,hideNavigation:!0,pageIdentifier:c,title:h},r(d[4]).isMobile()?a(d[2]).createElement(i(d[5]),{className:"aytYC",leftActions:o,rightActions:s,title:null!=l&&''!==l?l:this.$PlainShell1()}):a(d[2]).createElement(i(d[6]),{analyticsContext:"",className:"aytYC",hideActivity:!0,hideDirect:!0,hideExplore:!0,hideProfile:!0,hideSearchBar:!0,hideSignUpAndLogInText:!0,viewer:null}),a(d[2]).createElement("div",{className:i(d[7])("_8qite",this.props.className)},r(d[4]).isMobile()?t:Boolean(t)&&a(d[2]).createElement(i(d[8]),null,t)))}}},10747905,[20512883,10747906,3,20250785,20447239,20513056,20513086,20512819,10747907]);
__d(function() {},10747906,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({className:t,children:c}){return a(d[1]).createElement("div",{className:i(d[2])("AHCwU",t)},c)}},10747907,[10747908,3,20512819]);
__d(function() {},10747908,[]);