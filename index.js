// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImage = document.getElementById('profile_image')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500)

function getData() {
  header.innerHTML =
    ' <img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxhcHRvcHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image">'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis.'
  profileImage.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />'
  name.innerHTML = 'Mary Martha'
  date.innerHTML = 'Aug 04, 2021'

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}