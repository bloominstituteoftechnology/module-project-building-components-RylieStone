function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    let nav = document.createElement('nav')
    links.forEach(link => {
      const navelem = document.createElement("a")
      navelem.href = link.href
      navelem.textContent = link.textContent
      navelem.title = links.title
      nav.appendChild(navelem)
    })
    return nav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    let elem = document.createElement("div")
    elem.classList.add("learner-card")
    let favLanguage = languages.filter(language => language.id === learner.favLanguage)

    let nameElem = document.createElement("p")
    nameElem.textContent = learner.fullName
    elem.appendChild(nameElem)

    let learnerIDElem = document.createElement("p")
    learnerIDElem.textContent = `Learner ID: ${learner.id}`
    elem.appendChild(learnerIDElem)

    let dateElem = document.createElement("p")
    dateElem.textContent = `Date of Birth: ${learner.dateOfBirth}`
    elem.appendChild(dateElem)

    let favLanElem = document.createElement("p")
    favLanElem.textContent = `Favorite Language: ${favLanguage[0].name}`
    elem.appendChild(favLanElem)
    return elem
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach(learner => {
      document.querySelector("section").appendChild(buildLearnerCard(learner, languages))
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement('footer')
    const cominfo = document.createElement("div")
    cominfo.classList.add("company-info")
    const social = document.createElement("div")
    social.classList.add("social-media")
    const endfoot = document.createElement("div")

    let comname = document.createElement("p")
    comname.textContent = footerData.companyName
    comname.classList.add("company-name")
    cominfo.appendChild(comname)

    let address = document.createElement("p")
    address.textContent = footerData.address
    address.classList.add("address")
    cominfo.appendChild(address)

    let contact = document.createElement("p")
    let link = document.createElement("a")
    link.href = "mailto:info@example.com"
    link.textContent = "info@example.com"
    contact.textContent = `Email: `
    contact.appendChild(link)
    contact.classList.add("contact-email")
    cominfo.appendChild(contact)
    
    for (let [key, value] of Object.entries(footerData.socialMedia)) {
      let socialL = document.createElement("a")
      socialL.href = value
      socialL.textContent = key
      social.appendChild(socialL)
    }

    endfoot.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY 2023`
    footer.appendChild(cominfo)
    footer.appendChild(social)
    footer.appendChild(endfoot)
    return footer
  }
  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  document.querySelector("section").addEventListener("click", (evt) => {
    const allLearnCards = document.querySelectorAll(".learner-card")
    allLearnCards.forEach(card => card.classList.remove('active'))
    if (evt.target !== document.querySelector("section")) {
      evt.target.closest('.learner-card').classList.add("active")
    }
  })
  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
