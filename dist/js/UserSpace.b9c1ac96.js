(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserSpace"],{"035d":function(t,s,e){},"0abb":function(t,s,e){},1556:function(t,s,e){"use strict";e("7d6d")},2024:function(t,s,e){},2161:function(t,s,e){"use strict";e("40d6")},"22ae":function(t,s,e){"use strict";e("3aa1")},"3aa1":function(t,s,e){},"40d6":function(t,s,e){},"4d70":function(t,s,e){"use strict";e("2024")},"57eb":function(t,s,e){},"5e58":function(t,s,e){"use strict";e("035d")},"7d6d":function(t,s,e){},"803e":function(t,s,e){"use strict";e("b51a")},"8acc":function(t,s,e){"use strict";e("0abb")},9857:function(t,s,e){"use strict";e.r(s);var a=e("7a23"),c=Object(a["M"])("data-v-652c4d70");Object(a["w"])("data-v-652c4d70");var i={style:{margin:"4%"}},o=Object(a["i"])("div",null,[Object(a["i"])("h2",null,[Object(a["h"])(" Welcome Back "),Object(a["i"])("strong",{style:{color:"#42b983"}},"💯 🎧 🎹 🎶")])],-1),n=Object(a["i"])("strong",{style:{color:"#42b983","font-size":"18px",cursor:"pointer"}},"Sign out",-1),d={class:"d-block_space"},r={class:"menu_update"},l=Object(a["i"])("h3",null,"Change your Password",-1),p={class:"mt-5 col-lg-12"},u=Object(a["i"])("h3",null,"Update",-1),b={class:"mt-5"},m=Object(a["i"])("label",{for:""},"New Password",-1),v=Object(a["i"])("input",{type:"password",placeholder:"Password *",class:"txt_email_footer special_txt col-lg-12 login_pass",name:"login_pass"},null,-1),_={class:"error_message"},f={class:"mt-5"},h={style:{display:"flex","justify-content":"center","align-items":"center"}},j=Object(a["i"])("span",{class:"ml-2"},"Update",-1),g=Object(a["i"])("i",{class:"fas fa-arrow-right ml-2","aria-hidden":"true"},null,-1),y=Object(a["g"])('<div class="menu_commande" data-v-652c4d70><h3 class="cc" data-v-652c4d70>Order</h3><div class="mt-5 commande_head" data-v-652c4d70><div class="beats_block" data-v-652c4d70><h3 data-v-652c4d70>Beats</h3><div class="inline_block_beats" data-v-652c4d70><div class="img_block" data-v-652c4d70><img style="width:35px;height:35px;-o-object-fit:cover;object-fit:cover;border-radius:3px;" src="http://127.0.0.1:8000/images/6lack.jpeg" alt="" data-v-652c4d70></div><div data-v-652c4d70><span data-v-652c4d70>Lil wayne type beats</span></div><div class="btn_buy_player" data-v-652c4d70><span style="color:white;" data-v-652c4d70>$25</span></div></div></div><div data-v-652c4d70><h3 data-v-652c4d70>Status</h3><div style="margin-top:30px;" data-v-652c4d70><span style="color:#42b983;" data-v-652c4d70>Sold</span></div></div><div class="date_block" data-v-652c4d70><h3 data-v-652c4d70>Date</h3><div style="margin-top:30px;" data-v-652c4d70><span data-v-652c4d70>20/04/2021</span></div></div><div data-v-652c4d70><h3 data-v-652c4d70>means of payment</h3><div style="margin-top:30px;display:flex;justify-content:flex-end;" data-v-652c4d70><span data-v-652c4d70> Paypal</span></div></div></div></div>',1);Object(a["u"])();var O=c((function(t,s,e,c,O,w){var S=Object(a["B"])("HalfCircleSpinner");return Object(a["t"])(),Object(a["e"])("div",i,[o,Object(a["i"])("div",{onClick:s[1]||(s[1]=function(){return w.go_off&&w.go_off.apply(w,arguments)})},[n]),Object(a["i"])("div",d,[Object(a["i"])("div",r,[l,Object(a["i"])("div",p,[u,Object(a["i"])("div",b,[m,v,Object(a["i"])("p",_,Object(a["D"])(O.error_password),1)]),Object(a["i"])("div",f,[Object(a["i"])("button",{onClick:s[2]||(s[2]=function(){return w.change_pass&&w.change_pass.apply(w,arguments)}),class:"\n                btn_carou_buy_now_big btn_by_now_simple\n                black_on_small\n                col-lg-12\n              "},[Object(a["i"])("div",h,[j,g,1==O.loading_co?(Object(a["t"])(),Object(a["e"])(S,{key:0,style:{"margin-left":"50px"},"animation-duration":1e3,size:25,color:"#2c3e50"})):Object(a["f"])("",!0)])])])])]),y])])})),w=e("5530"),S=(e("498a"),e("5502")),k=e("bc3a"),x=e.n(k),C=e("4583"),H={name:"UserSpace",data:function(){return{error_password:"",loading_co:!1}},components:{HalfCircleSpinner:C["a"]},computed:Object(w["a"])({},Object(S["b"])(["domain_for_external_js_css_file"])),methods:{change_pass:function(){var t=this;""!=document.querySelector(".login_pass").value.trim()?(this.error_password="",this.loading_co=!0,x.a.get(this.domain_for_external_js_css_file+"api/update_password/"+localStorage.getItem("session_token")+"/"+document.querySelector(".login_pass").value).then((function(s){console.log(s.data),"Password has been changed successfully."!=s.data?(t.loading_co=!1,t.error_password=s.data):(t.error_password="",t.loading_co=!1,t.$swal({title:s.data,icon:"success",showConfirmButton:!1,timer:2e3}))})).catch((function(t){return console.log(t)}))):this.error_password="This field must not be empty."},importScript:function(t){var s=document.createElement("script");s.setAttribute("src","https://49keysbanger.com/server-side/storage/app/public/"+t),document.body.appendChild(s)},importScriptHead:function(t){var s=document.createElement("script");s.setAttribute("src","https://49keysbanger.com/server-side/storage/app/public/"+t),document.head.appendChild(s)},go_off:function(){localStorage.removeItem("session_token"),this.$router.push("/"),this.$store.dispatch("is_connected_f",!1),this.$store.dispatch("update_wishlist_count",0)}},mounted:function(){var t=this;this.importScriptHead("assets/js/jquery.js"),this.importScriptHead("assets/js/popper.js"),this.importScriptHead("assets/js/bootstrap.min.js"),this.importScriptHead("assets/js/fontawesome.js"),this.importScript("assets/js/main.js"),this.importScript("assets/css/accordion/main.js"),this.importScript("assets/js/grid_view_1.js"),this.importScript("assets/js/carousel/owlcarousel/owl.carousel.min.js"),this.importScript("assets/js/aos.js"),this.importScript("assets/js/home5.js"),this.importScript("assets/js/common_page_2.js"),localStorage.getItem("session_token")?x.a.get(this.domain_for_external_js_css_file+"api/token_verify/"+localStorage.getItem("session_token")).then((function(s){console.log(s.data),"Already connected"!=s.data&&t.$router.push("/")})).catch((function(t){return console.log(t)})):this.$router.push("/")}};e("1556"),e("8acc"),e("2161"),e("5e58"),e("f89a"),e("803e"),e("4d70"),e("d851"),e("22ae"),e("99a6"),e("d010");H.render=O,H.__scopeId="data-v-652c4d70";s["default"]=H},"990d":function(t,s,e){},"99a6":function(t,s,e){"use strict";e("e983")},b51a:function(t,s,e){},d010:function(t,s,e){"use strict";e("dd81")},d851:function(t,s,e){"use strict";e("990d")},dd81:function(t,s,e){},e983:function(t,s,e){},f89a:function(t,s,e){"use strict";e("57eb")}}]);
//# sourceMappingURL=UserSpace.b9c1ac96.js.map