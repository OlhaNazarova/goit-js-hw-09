import"./assets/modulepreload-polyfill-ec808ebb.js";const t=document.querySelector(".feedback-form"),m=t.elements.email,n=t.elements.message,l="feedback-form-state",e=JSON.parse(localStorage.getItem(l))??{};m.value=e.email??"";n.value=e.message??"";t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim();const s=JSON.stringify(e);localStorage.setItem(l,s)});t.addEventListener("submit",a=>{a.preventDefault(),console.log(e);const s=e.email&&e.email!=="",o=e.message&&e.message!=="";s&&o?(localStorage.removeItem(l),t.reset(),delete e.email,delete e.message):(s||console.log("Email field cannot be empty!"),o||console.log("Message field cannot be empty!"))});
//# sourceMappingURL=commonHelpers2.js.map
