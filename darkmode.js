const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')


toggle.addEventListener('click', function () {

    this.classList.toggle('fa-sun')

    if (this.classList.toggle('fa-moon')) {

        const nav = document.querySelector('.navbar')
        nav.style.background = 'white'
        nav.transition = '1.5s'

        const links = document.querySelectorAll('.nav-link')
        links.forEach(e => e.style.color = "black")


        const now = document.querySelector('.hero_section')
        now.style.background = 'white'
        now.style.transition = '1.5s'

        const service = document.querySelector('.service_section')
        service.style.background = 'white'
        service.style.transition = '1.5s'

        const about = document.querySelector('.about_section')
        about.style.background = 'white'
        about.transition = '1.5s'

        const foot = document.querySelector('.footer_section')
        foot.style.background = ''
        foot.transition = '1.5s'

        const sliderSpans = document.querySelectorAll('.slider')
        sliderSpans.forEach((e) => e.classList.remove('modify'))


        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s'
    }

    else {
        const nav = document.querySelector('.navbar')
        nav.style.background = '#180c40'
        nav.transition = '1.5s'

        const links = document.querySelectorAll('.nav-link')
        links.forEach(e => e.style.color = "white")

        const hero = document.querySelector('.hero_section')
        hero.style.background = '#180c40'
        hero.style.transition = '1.5s'

        const service = document.querySelector('.service_section')
        service.style.background = 'linear-gradient(to bottom, #180c40, #1a0561, #5dffff, #80ffff)'
        service.style.transition = '1.5s'

        const about = document.querySelector('.about_section')
        about.style.background = 'linear-gradient(to bottom, #80ffff, #180c40)'
        about.transition = '1.5s'

        const foot = document.querySelector('.footer_section')
        foot.style.background = '#180c40'
        foot.transition = '1.5s'

        const sliderSpans = document.querySelectorAll('.slider')
        sliderSpans.forEach((e) => e.classList.add('modify'))

        body.style.background = '#180c40'
        body.style.color = 'white'
        body.style.transition = '1s';
    }
});