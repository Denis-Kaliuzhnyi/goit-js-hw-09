const e=document.querySelector(".feedback-form"),o=e.querySelector('input[name="email"]'),l=e.querySelector('textarea[name="message"]'),a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(o.value=a.email||"",l.value=a.message||"");e.addEventListener("input",function(){const t={email:o.value.trim(),message:l.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))});e.addEventListener("submit",function(t){t.preventDefault();const s=o.value.trim(),m=l.value.trim();s&&m?(console.log({email:s,message:m}),e.reset(),localStorage.removeItem("feedback-form-state")):console.log("Please fill out all fields.")});
//# sourceMappingURL=2-form-8984f7ed.js.map