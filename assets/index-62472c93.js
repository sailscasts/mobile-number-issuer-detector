(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u=["0803","0806","0703","0706","0813","0816","0810","0814","0903","0906","0913","0916","07025","07026","0704"],a=["0805","0807","0705","0815","0811","0905","0915"],f=["0802","0808","0708","0812","0701","0902","0901","0904","0907","0912"],m=["07027","0709"],I=["0804"],L=["0702"],h=["07028","07029","0819"],d={MTN:u,GLO:a,AIRTEL:f,"9MOBILE":["0809","0818","0817","0909","0908"],MULTILINKS:m,NTEL:I,SMILE:L,STARCOMMS:h,"ZOOM MOBILE":["0707"]},c={invalid_dial_code:"Invalid dial code",invalid_phone_number_format:"Invalid number format",no_issuer_found:"Invalid Number! No Issuer Found"};function p(n){const r=/^(?:0\d{10})$/;let t;return r.test(n)?t=!0:n.length!==11&&n.startsWith("0")?t=c.invalid_dial_code:t=c.invalid_phone_number_format,t}function l(n){let r,t=!1;const s=p(n);for(const e in d)d[e].forEach((o,i,y)=>{s==!0?n.slice(0,o.length)===o&&(t=!0,r=e):(t=!0,r=s)});return t||(r=c.no_issuer_found),r}document==null||document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("numberInput"),r=document.getElementById("detectButton"),t=document.getElementById("result"),s=document.getElementById("csvFile");r==null||r.addEventListener("click",()=>{if(n.value){const e=l(n.value);t.textContent=`${e} - ${n.value}`,n.value="",document.getElementById("thead").innerHTML="",document.getElementById("tbody").innerHTML=""}else if(s.value){const e=new FileReader;e.onload=()=>{const o=d3.csvParse(e.result);document.getElementById("result").innerHTML="",v(o)},csvFile.files[0]&&e.readAsText(csvFile.files[0]),s.value=""}else t.textContent="Please provide a value to detect"})});function v(n){let r=`
  <th>S/N</th>
  <th>Number</th>
  <th>ISP</th>
  `;document.getElementById("thead").innerHTML+=r;for(let t=0;t<n.length;t++){let s=`
      <tr>
        <td>${n[t].id}</td>
        <td>${"0"+n[t].Number}</td>
        <td>${l("0"+n[t].Number)}</td>
      </tr>
    `;document.getElementById("tbody").innerHTML+=s}}