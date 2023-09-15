const aTags = document.querySelectorAll('a')
aTags.forEach (
    a => {
        // dış bağlantı linkini engelleme
        if(e.target.getAttribute('href').includes('http')){
            if(!confirm('Güvenli olmayan bir siteye gitmeye çalışıyorsunuz!')){
                e.preventDefault()
            }
        }
    }
)