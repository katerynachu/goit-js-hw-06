const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEl = document.querySelector('.gallery')

for (const image of images) {
  const galleryItemEl = document.createElement('li');
  galleryItemEl.classList.add('gallery_item')
  const galleryImgEl = document.createElement('img');
  galleryImgEl.classList.add('gallery_img')
  
  galleryImgEl.src = image.url;
  galleryImgEl.alt = image.alt; 
  
  galleryItemEl.appendChild(galleryImgEl);
  galleryEl.appendChild(galleryItemEl)
}


// images.forEach((item) => {
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('gallery_item')
//   const galleryImgEl = document.createElement('img');
//   galleryImgEl.classList.add('gallery_img')
//   galleryImgEl.src = item.url;
//   galleryImgEl.alt = item.alt;
//   galleryItemEl.appendChild(galleryImgEl);
//   galleryEl.appendChild(galleryItemEl)

// })