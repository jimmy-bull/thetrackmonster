(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ForgotPassword"],{"01a3":function(t,e,n){"use strict";n("4191")},"0a4a":function(t,e,n){"use strict";n("1d85")},"0a64":function(t,e,n){},"13c4":function(t,e,n){},"174c":function(t,e,n){},"1d85":function(t,e,n){},"21bb":function(t,e,n){"use strict";n("acf4")},"23e3":function(t,e,n){"use strict";n("99c6")},"3a80":function(t,e,n){},4191:function(t,e,n){},"43bd":function(t,e,n){},"4e67":function(t,e,n){"use strict";n("0a64")},6979:function(t,e,n){},"6a11":function(t,e,n){"use strict";n("d9f0")},"7b94":function(t,e,n){"use strict";n("6979")},"99c6":function(t,e,n){},a40c:function(t,e,n){"use strict";n("13c4")},acf4:function(t,e,n){},b32d:function(t,e,n){"use strict";n("43bd")},bfcc:function(t,e,n){"use strict";n("3a80")},d9f0:function(t,e,n){},dfb9:function(t,e,n){"use strict";n("174c")},f243:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),o=Object(c["M"])("data-v-4c42d8cd");Object(c["w"])("data-v-4c42d8cd");var s={id:"page-content"},i={class:"container"},a={class:"row d-flex justify-content-center",style:{"margin-top":"20vh"}},r={class:"col-lg-6"},u=Object(c["i"])("h3",null,"I reset my password",-1),l=Object(c["i"])("div",{class:"cart_color_solo"},[Object(c["i"])("p",null,"Enter your email and receive a link to reset your password.")],-1),d={class:"mt-3"},f=Object(c["i"])("input",{type:"text",placeholder:"E-mail adress *",class:"txt_email_footer email_input special_txt col-lg-10",name:"register_mail"},null,-1),b={class:"error_message"},p={class:"mt-3"},_={style:{display:"flex","justify-content":"center","align-items":"center"}},w=Object(c["i"])("span",{class:"ml-2"},"Send",-1),m=Object(c["i"])("i",{class:"fas fa-arrow-right ml-2","aria-hidden":"true"},null,-1);Object(c["u"])();var j=o((function(t,e,n,o,j,g){var O=Object(c["B"])("HalfCircleSpinner");return Object(c["t"])(),Object(c["e"])("div",s,[Object(c["i"])("div",i,[Object(c["i"])("div",a,[Object(c["i"])("div",r,[u,l,Object(c["i"])("div",d,[f,Object(c["i"])("p",b,Object(c["D"])(j.error_password_forgot),1)]),Object(c["i"])("div",p,[Object(c["i"])("button",{onClick:e[1]||(e[1]=function(){return g.new_password&&g.new_password.apply(g,arguments)}),class:"\n                btn_carou_buy_now_big btn_by_now_simple\n                black_on_small\n                col-lg-10\n              "},[Object(c["i"])("div",_,[w,m,1==j.loading?(Object(c["t"])(),Object(c["e"])(O,{key:0,style:{"margin-left":"50px"},"animation-duration":1e3,size:25,color:"#2c3e50"})):Object(c["f"])("",!0)])])])])])])])})),g=n("5530"),O=(n("498a"),n("5502")),v=n("bc3a"),h=n.n(v),y=n("4583"),x={name:"ForgotPassword",components:{HalfCircleSpinner:y["a"]},computed:Object(g["a"])({},Object(O["b"])(["domain_for_external_js_css_file"])),data:function(){return{error_password_forgot:"",loading:!1}},methods:{new_password:function(){var t=this;""!=document.querySelector(".email_input").value.trim()?(this.loading=!0,h.a.get(this.domain_for_external_js_css_file+"api/forgotPassword/"+document.querySelector(".email_input").value).then((function(e){console.log(e.data),"new password sent"!=e.data?(t.loading=!1,t.error_password_forgot=e.data):"new password sent"==e.data&&(t.$swal({title:"A new password has been sent to you.",icon:"success",showConfirmButton:!1,timer:3e3}),t.error_password_forgot="",t.loading=!1,setTimeout((function(){t.$router.push({path:"account"})}),3e3))})).catch((function(t){return console.log(t)}))):this.error_password_forgot="the field must not be empty!"}},mounted:function(){window.scrollTo(0,0)}};n("01a3"),n("7b94"),n("4e67"),n("23e3"),n("0a4a"),n("bfcc"),n("a40c"),n("21bb"),n("6a11"),n("dfb9"),n("b32d");x.render=j,x.__scopeId="data-v-4c42d8cd";e["default"]=x}}]);
//# sourceMappingURL=ForgotPassword.fa757a87.js.map