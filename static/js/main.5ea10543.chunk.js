(this["webpackJsonpreactwarriors-form-task"]=this["webpackJsonpreactwarriors-form-task"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(4),s=t.n(l),o=t(2),m=t(1),c=t.n(m);var i=e=>{const a=e.value,t=e.id,r=e.labelText,l=e.type,s=e.placeholder,o=e.name,m=e.onChange,i=e.error;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},r),n.a.createElement("input",{type:l,className:c()("form-control",{invalid:i}),placeholder:s,id:t,value:a,name:o,onChange:m}),i?n.a.createElement("div",{className:"invalid-feedback"},i):null)};var u=e=>{const a=e.values,t=a.firstName,r=a.lastName,l=a.gender,s=a.password,o=a.repeatPassword,m=e.errors,c=e.onChange;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,{id:"firstName",labelText:"First name",type:"text",placeholder:"Enter your first name",value:t,name:"firstName",onChange:c,error:m.firstName}),n.a.createElement(i,{id:"lastName",labelText:"Last name",type:"text",placeholder:"Enter your last name",value:r,name:"lastName",onChange:c,error:m.lastName}),n.a.createElement(i,{id:"password",labelText:"Password",type:"password",placeholder:"Enter password",value:s,name:"password",onChange:c,error:m.password}),n.a.createElement(i,{id:"repeatPassword",labelText:"Repeat password",type:"password",placeholder:"Enter repeat password",value:o,name:"repeatPassword",onChange:c,error:m.repeatPassword}),n.a.createElement("fieldset",{className:"form-group"},n.a.createElement("div",null,"Gender"),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"gender",id:"male",value:"male",checked:"male"===l,onChange:c}),n.a.createElement("label",{className:"form-check-label",htmlFor:"male"},"Male")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"gender",id:"female",value:"female",checked:"female"===l,onChange:c}),n.a.createElement("label",{className:"form-check-label",htmlFor:"female"},"Female"))))};var d=e=>{const a=e.id,t=e.value,r=e.labelText,l=e.name,s=e.onChange,o=e.error,m=e.defaultOption,i=e.options;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:a},r),n.a.createElement("select",{className:c()("form-control",{invalid:o}),id:a,value:t,name:l,onChange:s},n.a.createElement("option",{value:""},m),i),o?n.a.createElement("div",{className:"invalid-feedback"},o):null)},p=[{id:1,name:"Ukraine"},{id:2,name:"Germany"},{id:3,name:"France"},{id:4,name:"Spain"},{id:5,name:"USA"}],v={1:{country:1,name:"Kyiv"},2:{country:1,name:"Lviv"},3:{country:1,name:"Odessa"},4:{country:1,name:"Dnipro"},5:{country:1,name:"Kharkiv"},6:{country:2,name:"Berlin"},7:{country:2,name:"Dortmund"},8:{country:2,name:"Drezden"},9:{country:2,name:"Hamburg"},10:{country:2,name:"Koln"},11:{country:3,name:"Paris"},12:{country:3,name:"Lyon"},13:{country:3,name:"Toulouse"},14:{country:3,name:"Marseille"},15:{country:3,name:"Bordeaux"},16:{country:4,name:"Madrid"},17:{country:4,name:"Barcelona"},18:{country:4,name:"Sevilla"},19:{country:4,name:"Bilbo"},20:{country:4,name:"Malaga"},21:{country:5,name:"Washington"},22:{country:5,name:"San-Francisco"},23:{country:5,name:"New-York"},24:{country:5,name:"Las-Vegas"},25:{country:5,name:"Miami"}};var h=e=>{const a=e.values,t=a.email,r=a.mobile,l=a.country,s=a.city,o=e.onChange,m=e.errors,c=e=>e.map(e=>n.a.createElement("option",{key:e.id,value:e.id},e.name));return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,{id:"email",labelText:"Email",type:"text",placeholder:"Enter your Email",value:t,name:"email",onChange:o,error:m.email}),n.a.createElement(i,{id:"mobile",labelText:"Mobile",type:"text",placeholder:"Enter your Mobile",value:r,name:"mobile",onChange:o,error:m.mobile}),n.a.createElement(d,{id:"country",labelText:"Country",value:l,name:"country",onChange:o,defaultOption:"Choose your Country",options:c(p),error:m.country}),n.a.createElement(d,{id:"city",labelText:"City",value:s,name:"city",onChange:o,defaultOption:"Choose your City",options:(e=>{const a=Object.entries(e).filter(e=>e[1].country===Number(l));return c(a.map(([e,a])=>({id:e,name:a.name})))})(v),error:m.city}))},E=t(5),y=t.n(E);var b=e=>{const a=e.avatar,t=e.onChange,r=e.errors;return n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:"mb-4",src:a||y.a,alt:"",width:"100%"}),n.a.createElement("div",{className:"mb-4"},n.a.createElement("div",{className:"custom-file"},n.a.createElement("input",{type:"file",className:"custom-file-input",id:"avatar",name:"avatar",onChange:e=>{const a=e.target.files[0],r=new FileReader;r.onload=e=>{t({target:{name:"avatar",value:e.target.result}})},r.onerror=e=>{console.error(e)},r.readAsDataURL(a)}}),n.a.createElement("label",{className:"custom-file-label",htmlFor:"avatar"},"Choose avatar")),r.avatar?n.a.createElement("div",{className:"invalid-feedback"},r.avatar):null))};var g=e=>{var a;const t=e.values,r=t.avatar,l=t.firstName,s=t.lastName,o=t.email,m=t.mobile,c=t.country,i=t.city,u=p.find(e=>e.id===Number(c));return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:r,alt:"",width:"100%"})),n.a.createElement("div",{className:"col-8 d-flex align-items-center"},n.a.createElement("h4",null,l," ",s))),n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-12"},n.a.createElement("p",null,n.a.createElement("strong",null,"Email:")," ",o),n.a.createElement("p",null,n.a.createElement("strong",null,"Mobile:")," ",m),n.a.createElement("p",null,n.a.createElement("strong",null,"Location:")," ",null===u||void 0===u?void 0:u.name,","," ",null===(a=v[i])||void 0===a?void 0:a.name))))};var N=e=>{const a=e.step,t=e.nextStep,r=e.prevStep;return n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("button",{type:"button",className:"btn btn-light mr-4",disabled:1===a,onClick:r},"Previous"),n.a.createElement("button",{type:"submit",className:"btn btn-secondary",onClick:t},"Next"))};var f=e=>n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.resetForm},"Reset"));const C=["Basic","Contacts","Avatar","Finish"];class w extends r.Component{render(){const e=this.props.step;return n.a.createElement("div",{className:"steps mb-4"},C.map((a,t)=>n.a.createElement("div",{key:t,className:c()("step",{"is-active":e===t+1},{"is-completed":e>t+1})},n.a.createElement("div",{className:"step__marker"},t+1),n.a.createElement("div",{className:"step__title mt-1"},a))))}}const x=new RegExp(/^[a-z ,.'-]{5,}$/i),k=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),F=new RegExp(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/);class S extends r.Component{constructor(){super(),this.onChange=e=>{const a=e.target,t=a.name,r=a.value;"country"===t&&this.setState(e=>({values:Object(o.a)({},e.values,{city:""})})),this.setState(e=>({values:Object(o.a)({},e.values,{[t]:r})}))},this.checkErrors=()=>{const e=this.state.values,a=e.firstName,t=e.lastName,r=e.password,n=e.repeatPassword,l=e.email,s=e.mobile,o=e.country,m=e.city,c=e.avatar,i={};switch(this.state.step){case 1:x.test(a)||(i.firstName="Must be 5 characters or more"),x.test(t)||(i.lastName="Must be 5 characters or more"),r.length<5&&(i.password="Must be 5 characters or more"),n!==r&&(i.repeatPassword="Must be equal passwords");break;case 2:k.test(l)||(i.email="Invalid email address"),F.test(s)||(i.mobile="Invalid mobile number"),""===o&&(i.country="Required"),""===m&&(i.city="Required");break;case 3:""===c&&(i.avatar="Required")}return i},this.nextStep=e=>{e.preventDefault();const a=this.checkErrors();Object.keys(a).length>0?this.setState({errors:a}):this.setState(e=>({step:e.step+1,errors:{}}))},this.prevStep=()=>{this.setState(e=>({step:e.step-1}))},this.resetForm=()=>{this.setState({step:1,values:{firstName:"",lastName:"",password:"",repeatPassword:"",gender:"male",email:"",mobile:"",country:"",city:"",avatar:""},errors:{}})},this.state={step:1,values:{firstName:"",lastName:"",password:"",repeatPassword:"",gender:"male",email:"",mobile:"",country:"",city:"",avatar:""},errors:{}}}render(){const e=this.state,a=e.step,t=e.values,r=e.errors;return n.a.createElement("form",{className:"form card-body"},n.a.createElement(w,{step:a}),1===a&&n.a.createElement(u,{values:t,onChange:this.onChange,errors:r}),2===a?n.a.createElement(h,{values:t,onChange:this.onChange,errors:r}):null,3===a&&n.a.createElement(b,{avatar:t.avatar,onChange:this.onChange,errors:r}),4===a&&n.a.createElement(g,{values:t}),a<4?n.a.createElement(N,{nextStep:this.nextStep,prevStep:this.prevStep,step:a}):n.a.createElement(f,{resetForm:this.resetForm}))}}class M extends r.Component{render(){return n.a.createElement("div",{className:"form-container card"},n.a.createElement(S,null))}}t(11),t(12);s.a.render(n.a.createElement(M,null),document.getElementById("root"))},5:function(e,a,t){e.exports=t.p+"static/media/default-avatar.59337bae.png"},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.5ea10543.chunk.js.map