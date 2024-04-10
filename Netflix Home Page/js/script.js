var allQuestion = document.querySelectorAll('.faqQuestion');
    allQuestion.forEach(
        (d,i)=>{
            // console.log(d)
            d.addEventListener(
                'click',
                ()=>{
                    d.nextElementSibling.classList.toggle('h-[auto]')
                    d.nextElementSibling.classList.toggle('p-[30px]')
                    d.nextElementSibling.classList.toggle('scale-y-100')

                    // console.log(d.children[1])
                    d.children[1].classList.toggle('rotate-45')

                    allQuestion.forEach(
                        (elem, index)=>{
                            if(index != i){
                                elem.nextElementSibling.classList.remove('h-[auto]', 'p-[30px]', 'scale-y-100')
                                elem.children[1].classList.remove('rotate-45')
                            }
                        }
                    )
                }
            )
        }
    )