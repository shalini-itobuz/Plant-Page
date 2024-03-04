const imageUrls = [
    './images/plantsScroll/image1.png',
    './images/plantsScroll/image2.png',
    './images/plantsScroll/image1.png',
    './images/plantsScroll/image2.png',
    './images/plantsScroll/image1.png',
    './images/plantsScroll/image2.png',
    './images/plantsScroll/image1.png',
    './images/plantsScroll/image2.png',
    './images/plantsScroll/image1.png',
    './images/plantsScroll/image2.png',
    './images/plantsScroll/image1.png',
    './images/plantsScroll/image2.png',
  ];

  const carouselImagesContainer = document.querySelector('.carousel-images');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const imagesPerPage = 3;

  function renderImages() {
    carouselImagesContainer.innerHTML = '';
    const endIndex = Math.min(currentIndex + imagesPerPage, imageUrls.length);
    for (let i = currentIndex; i < endIndex; i++) {
      const img = document.createElement('img');
      img.src = imageUrls[i];
      img.alt = `Image ${i + 1}`;
      if (i === currentIndex) {
        img.classList.add('active1');
      }
      carouselImagesContainer.appendChild(img);
    }
  }

  function nextSlide() {
    if (currentIndex + imagesPerPage < imageUrls.length) {
      currentIndex++;
      renderImages();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      renderImages();
    }
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  renderImages();

  const imageUrls1 = [
    './images/hero/plant1.png',
    './images/hero/plant2.png',
    './images/hero/plant1.png',
    

    
  ];
  
  const carouselImagesFirst = document.querySelector('.carousel-images-first');
  
  function renderImagesFirst() {
    carouselImagesFirst.innerHTML = '';
    imageUrls1.forEach((imageUrl1) => {
      const img1 = document.createElement('img');
      img1.src = imageUrl1;
      carouselImagesFirst.appendChild(img1);
    });
  }
  
  renderImagesFirst();
  
  carouselImagesFirst.addEventListener('mouseover', function() {
    const firstImage = this.querySelector('img1');
    this.style.transition = 'transform 10s linear';
    this.style.transform = `translateX(-${firstImage.offsetWidth}px)`;
  });
  
  carouselImagesFirst.addEventListener('mouseleave', function() {
    this.style.transition = 'transform 0.3s ease';
    this.style.transform = 'translateX(0)';
  });
  
  carouselImagesFirst.addEventListener('click', function(event) {
    const targetImage = event.target;
    const carouselRect = this.getBoundingClientRect();
    const imageRect = targetImage.getBoundingClientRect();
    const targetOffset = (carouselRect.width / 2) - (imageRect.width / 2) - imageRect.left;
  
    this.style.transition = 'transform 0.3s ease';
    this.style.transform = `translateX(${targetOffset}px) scale(0.9)`;
  });
  
