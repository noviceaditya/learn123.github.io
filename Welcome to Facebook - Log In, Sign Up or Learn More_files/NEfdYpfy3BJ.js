/*!CK:611873957!*//*1392822799,178129739*/

if (self.CavalryLogger) { CavalryLogger.start_js(["AWb\/8"]); }

__d("RegistrationInterstitialCaptcha",["CSS","DOM","Input","$"],function(a,b,c,d,e,f,g,h,i,j){var k={havePermission:false,linkContainerID:'add_parent_link_container',emailFieldContainerID:'parent_email_field_container',emailFieldID:'parent_email_field',show:function(){var l=j('reg_pc'),m=j('reg_box'),n=j('reg_captcha'),o=j('reg_error'),p=j('tos_container'),q=j('security_check_header'),r=j('kid_captcha_container');h.setContent(j('content'),m);r.appendChild(n);l.appendChild(p);l.appendChild(o);g.hide(q);g.hide(j('captcha_buttons'));g.show(l);},toggleAddParent:function(){var l=j(this.linkContainerID),m=j(this.emailFieldContainerID);if(!this.havePermission){g.show(l);}else{g.hide(l);g.hide(m);}this.havePermission=!this.havePermission;},showEmailField:function(l){i.setPlaceholder(j(this.emailFieldID),l);g.show(j(this.emailFieldContainerID));g.hide(j(this.linkContainerID));}};e.exports=k;});