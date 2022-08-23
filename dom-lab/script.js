// Task 3.0 and Task 5.0
let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
// Task 1.0
const mainEl = document.querySelector('main');
// console.log(mainEl)
// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
// Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
// Task 1.3
mainEl.classList.add("flex-ctr");
// Task 2.0
const topMenuEl = document.getElementById('top-menu');
// Task 2.1
topMenuEl.style.height = "100%";
// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Task 2.3
topMenuEl.classList.add('flex-around');
// console.log(topMenuEl)
// Task 3.1
for (links of menuLinks) {
  const newAnchor = document.createElement('a');
  newAnchor.setAttribute('href', links.href);
  newAnchor.textContent = links.text;
  topMenuEl.appendChild(newAnchor);
}

// Task 4.0
const subMenuEl = document.querySelector('#sub-menu');
// Task 4.1
subMenuEl.style.height = "100%"
// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
// Task 4.3
subMenuEl.classList.add('flex-around')
// Task 4.4
subMenuEl.style.position = 'absolute'
// Task 4.5
subMenuEl.style.top = '0'

// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// Task 5.2 -- delegated
const delegatedTopMenuLinks = document.querySelectorAll('#top-menu a')
const handleClick = (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.tagName !== 'a') {
    // console.log(target.textContent);
    return;
    
  }
// Task 5.3
  if (target.classList.contains('active')) {
    target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  // Task 5.4
  delegatedTopMenuLinks.forEach((target) => {
    target.classList.remove('active')
  })

  // Task 5.5
  delegatedTopMenuLinks.addEventListener('click', handleClick) 
    target.classList.add('active');

  // Task 5.6 -- could not get to work so the submenu remains hidden
  let str = 'subLinks'
  if (topMenuLinks.textContent.includes(str)) {
    showingSubMenu = true
  } else {
    showingSubMenu = false
  }};

  // Task 5.7 -- could not get to work
  if (showingSubMenu === true) {
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = '0'
  }

  // Task 5.8 -- 
  let subLinksArr // need to create array from subLinks
  const buildSubMenu = (subLinksArr) => {
    showingSubMenu = false;
    for (links of subLinksArr) {
      const newSubLink = document.createElement('a');
      newSubLink.setAttribute('href', subLinksArr.href);
      newSubLink.textContent = subLinksArr.text;
      subMenuEl.appendChild(newSubLink);
    }
  }

  // Task 6.0
  const delegatedSubMenuEl = document.querySelector('#sub-menu')
  delegatedSubMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    let target2 = evt.target;
    if (target2.tagName !== 'a') return;
    console.log(target2.textContent);
  
  // Task 6.1
  showingSubMenu = false
  subMenuEl.style.top = '0'
});

// Task 6.2 -- not working, unsure why
topMenuLinks.classList.remove('active')

// Task 6.3 -- incomplete
mainEl.innerHTML = '<h1></h1>' 

// Task 6.4 -- incomplete
//.innerHTML = '<h1>about</h1>'