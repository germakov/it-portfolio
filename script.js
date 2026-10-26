document.getElementById('year').textContent=new Date().getFullYear();
 // Положи фотографию с именем photo.jpg рядом с index.html — она появится в шапке.
 const photo=new Image();photo.onload=()=>{const el=document.getElementById('avatar');el.textContent='';el.append(photo)};photo.src='photo.jpg';
