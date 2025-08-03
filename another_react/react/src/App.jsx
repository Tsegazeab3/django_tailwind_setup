import { useState } from 'react'
import Axios from 'axios'
import viteLogo from '/vite.svg'
import './style.css'
function Header() {
  return (
    <header class="flex relative justify-between items-center h-15 w-screen  bg-[#37393A] p-6 opacity-100">
      <div class="w-40">
        <a class="block h-11 w-11 fixed top-2.5 rounded-4xl  items-center justify-center bg-[url('./assets/addis_log.png')] bg-cover bg-right-bottom overflow-hidden"></a>
      </div>
      <div class="w-175  h-15 flex justify-center gap-4">
        <ul class="flex items-center gap-4 ">
          <li class="text-white hover:text-grey-300 hover:underline">News</li>
          <li class="text-white hover:text-grey-300 hover:underline">Public Transportaion</li>
          <li class="text-white hover:text-grey-300 hover:underline">Public safety & Emergency</li>
          <li class="text-white hover:text-grey-300 hover:underline">Community & Engagement</li>
        </ul>
      </div>
      <div class="flex  gap-4">
        <h1 class="py-1 px-4 text-white hover:text-grey-300 hover:underline">Sign In</h1>
        <h1 class="bg-[#0d4d99]	rounded-lg text-white py-1 px-4 hover:bg-[#23FFD3] hover:text-black">Sign Up</h1>
      </div>
    </header>
  );
}
function Main() {

  return (
    <main>
      <div class="flex flex-col justify-center items-center px-16 w-screen h-140 bg-cover bg-center bg-[url('./assets/addis_page1_bg.png')]">
        <div class="relative bottom-14 right-1  bg-linear-180 from-[#a6a6a6]/40 to-[#ffffff]/40 rounded-3xl flex justify-center items-center  h-30 w-200">
          <h1 class="text-6xl text-center ">Welcome to Addis Ababa City</h1>
        </div>
        <div class="flex relative bottom-18 w-screen justify-end p-8">
          <a><img class="h-20 w-20 " src="./src/assets/assets/portal_svg.svg" /></a>
        </div>

      </div>
      <ul class="scroll-smooth h-25 w-screen flex justify-around">
        <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>Population</div><div>0</div></li>
        <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>Area</div><div>0</div></li>
        <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>Number of visitors</div><div>0</div></li>
        <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>State Revenue</div><div>0</div></li>
      </ul>

      <div class="scroll-smooth w-screen h-200 flex p-8 gap-8 justify-around">
        <div class="flex-1 flex flex-col overflow-hidden">
          <img class="h-[60%]  object-cover" src="./src/assets/adanech_pic.jpg" />
          <div class="bg-[#0d4d99] h-[40%]  flex flex-col p-5">
            <h1 class="text-white text-center">Dr Adanech Abebe</h1>
            <p class="text-white text-justify">Adanech Abebe is the current mayor of Addis Ababa, making history as the first woman to hold the position. She was appointed in 2020 and has since focused on urban development and improving public services. Before becoming mayor, she served as Ethiopia’s Minister of Revenue. Adanech is known for her leadership in reforming tax systems and combating corruption. As mayor, she has worked on infrastructure projects and housing programs for low-income residents. Her role highlights the increasing presence of women in Ethiopian politics and leadership.</p>
          </div>
        </div>
        <div class="flex-1 bg-amber flex flex-col gap-8 p-8">
          <h2 class="text-center font-bold text-2xl">About Addis</h2>
          <p class="flex-wrap text-lg">Addis Ababa is the capital city of Ethiopia and one of the highest capitals in the world, sitting at about 2,355 meters above sea level. It was founded in 1886 by Emperor Menelik II and means "new flower" in Amharic. The city serves as the political, cultural, and economic center of the country. It is home to the African Union headquarters and numerous international organizations. Addis Ababa is known for its diverse population, vibrant markets, and historic landmarks like the National Museum and Holy Trinity Cathedral. Despite rapid development, the city still preserves elements of its rich cultural heritage.</p>
        </div>
      </div>
      <div class="w-screen">
        <h1 class="text-center my-8 text-3xl">City Services & Information </h1>
        <div class=" px-12 flex flex-row justify-center gap-8 h-100 w-screen mx-auto">
          <div class=" px-4 py-8 border border-black h-90 flex-1 rounded-xl flex flex-col justify-start">
            <div class="h-12 w-12 bg-[url('./assets/transportation_logo.png')] bg-cover"></div>
            <h1 class="mt-4 text-xl font-medium" > Public transportation </h1>

            <p class="mt-4 text-start">Access bus schedules, route maps, ticket information, and real time updates for all public transportation services</p>
            <ul class="mt-4 list-disc list-inside">
              <li class="list-disc">Bus schedules and routes</li>
              <li class="list-disc ">online ticket booking</li>
              <li class="list-disc">service updates and alerts</li>
            </ul>
          </div>
          <div class=" px-4 py-8 border border-black h-90 flex-1 rounded-2xl flex flex-col justify-start">
            <div class="z-40 h-12 w-12 bg-[url('./assets/property_logo.png')] bg-cover"></div>
            <h1 class="z-0 mt-4 text-xl font-medium">Property Tax & Assessement</h1>
            <p class="mt-4 text-start">Addis Ababa property tax information, payment options, assessment records, and related legal documentation.</p>
            <ul class="mt-4 list-inside list-disc">
              <li>Tax payment portal</li>
              <li>Property assessment records</li>
              <li>Legal amendments and updates</li>
            </ul>
          </div>
          <div class=" px-4 py-8 border border-black h-90  flex-1 rounded-2xl flex flex-col justify-start">
            <div class="mb-4 h-12 w-12 bg-[url('./assets/amendment_logo.png')] bg-cover"></div>
            <h1 class=" text-xl font-medium">Latest Amendments</h1>
            <p class="mt-4 text-start">Stay updated with the latest legal amendments, policy changes, and regulatory updates affecting city residents.</p>
            <ul class="mt-4 list-inside list-disc">
              <li>Recent policy changes</li>
              <li>Legal document updates</li>
              <li>Regulatory announcements</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex gap-8 mt-10 h-130 w-screen p-8">
        <article class="flex flex-col flex-1 min-w-[200px] rounded-2xl bg-gray-100">
          <div class="flex-1 overflow-auto">
            <img class="w-full h-full object-cover object-top" src="../src/assets/news.jpg" />
          </div>
          <section class="flex-1 flex flex-col p-8">
            <h1 class="text-center font-bold text-2xl">UN Food Summit</h1>
            <p class="font-medium text-md">Ethiopia with the help of Italy will be hosting the coming UN food systems Summit, with Italy In connection with this conference, Prime Minister Abiy Ahmed (PhD) received and spoke to heads of institutions and leaders who arrived in Addis Ababa.<br />
              The Prime Minister received and spoke to the Prime Minister of Italy, the President of Somalia, the UN Deputy Secretary-General, the Director-General of FAO, the President of IFAD, the UN Assistant Secretary-General, and the UNDP Regional Director for Africa.</p>
            <a class="block underline min-w-20 mt-auto ml-auto" href="#">Read more</a>
          </section>
        </article>
        <article class="flex flex-col flex-1 relative min-w-[200px] rounded-2xl bg-gray-100">
          <div class="flex-1 overflow-auto">
            <img class="w-full h-full object-cover object-center" src="./src/assets/news3.jpg" />
          </div>
          <section class="flex-1 flex flex-col p-8">
            <h1 class="text-center font-bold text-2xl">UN Food Summit</h1>
            <p class="font-medium text-md">Ethiopia with the help of Italy will be hosting the coming UN food systems Summit, with Italy In connection with this conference, Prime Minister Abiy Ahmed (PhD) received and spoke to heads of institutions and leaders who arrived in Addis Ababa.<br />
              The Prime Minister received and spoke to the Prime Minister of Italy, the President of Somalia, the UN Deputy Secretary-General, the Director-General of FAO, the President of IFAD, the UN Assistant Secretary-General, and the UNDP Regional Director for Africa.</p>
            <a class="block underline min-w-20 mt-auto ml-auto" href="#">Read more</a>
          </section>
          <div class="absolute shadow-[-10px_0_10px_rgba(0,0,0,0.2)] right-0 w-5 h-110 -mr-4 bg-gray-900 opacity-50 hover:opacity-100">
          </div>

        </article>

      </div>
      <div>
        <h1 class="text-center my-8 text-3xl"> Public Safety & Emergency Services</h1>
        <div class="flex p-8 gap-8">
          <div class="p-8 h-100 flex-1 flex flex-col border border-black rounded-2xl">
            <div class="w-16 h-16 bg-[url('./assets/addisababa_police_logo.png')] bg-cover bg-center mb-8"></div>
            <h2 class="text-xl font-bold text-center"> Public Safety & Emergency Services</h2>
            <p class="text-md font-medium text-justify"> Report criminal activities and hazardous situations to local authorities through our secure reporting system. you can call them through</p>
            <ul class="list-disc list-inside">
              <li class="">dial 991 or 916</li>
              <li class="">text </li>
              <li class=""></li>
            </ul>

          </div>
          <div class="p-8 h-100 flex-1 flex flex-col border border-black rounded-2xl">
            <div class="w-16 h-16 bg-[url('./assets/addis_ababa_fire_station_logo.png')] bg-cover bg-center mb-8"></div>
            <h2 class="text-xl font-bold text-center">Fire & Rescue Services</h2>
            <p class="text-md font-medium text-start">Access fire department services, report hazardous conditions, and get emergency assistance information.</p>
            <ul class="list-disc list-inside">
              <li class="">dial 991 or 916</li>
              <li class="">text </li>
              <li class=""></li>
            </ul>
          </div>
          <div class="p-8 h-100 flex-1 flex flex-col border border-black rounded-2xl">
            <div class="w-16 h-16 bg-[url('./assets/traffic_bureau.png')] bg-cover bg-center mb-8"></div>
            <h2 class="text-xl font-bold text-center">Traffic & Road Incidents</h2>
            <p class="text-md font-medium text-justify">Report traffic accidents, road hazards, and access real-time traffic incident updates and alerts.</p>
            <ul class="list-disc list-inside">
              <li class="">dial 991 or 916</li>
              <li class="">text </li>
              <li class=""></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 class="text-center my-8 text-3xl text-center">Community & Engagement</h1>
          <div class="p-4 w-screen  px-16 h-100 gap-8 grid grid-cols-3 grid-rows-2">
            <div class="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div class="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div class="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div class="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div class="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div class="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-center my-8 text-3xl text-center">Urban Infrastructure & Utilities</h1>
          <div class="p-4 w-screen  px-16 h-100 gap-8 grid grid-cols-3 grid-rows-2">
            <div class="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div class="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div class="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div class="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div class="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img class="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
function Footer() {
  return (
    <footer>
      <div class="grid grid-rows-1 grid-cols-4 h-100 w-screen px-16 gap-4 p-8 border border-black bg-[#1D5793]">
        <div class="p-8 col-span-1 row-span-1 border border-black">
          <h3 class="text-xl font-bold mb-4">City Admin</h3>
          <p class="text-medium hover:underline text-white">Your comprehensive city administration portal for all municipal services and information.</p>
        </div>
        <div class="p-8 col-span-1 row-span-1 border border-black">
          <h3 class="text-xl font-bold mb-4">Services</h3>
          <ul class="space-y-2 list-inside list-none">
            <li class="text-medium hover:underline text-white">Public Transportation</li>
            <li class="text-medium hover:underline text-white">Property Tax</li>
            <li class="text-medium hover:underline text-white">Emergency Services</li>
            <li class="text-medium hover:underline text-white">Community Events</li>
          </ul>
        </div>
        <div class="p-8 col-span-1 row-span-1 border border-black">
          <h3 class="text-xl font-bold mb-4">Support</h3>
          <ul class="list-inside list-none space-y-2 text-justify">
            <li class="text-medium hover:underline text-white">Contact Us</li>
            <li class="text-medium hover:underline text-white">Help Center</li>
            <li class="text-medium hover:underline text-white">Report Issue</li>
            <li class="text-medium hover:underline text-white">Feedback</li>
          </ul>
        </div>
        <div class="p-8 col-span-1 row-span-1 border border-black">
          <h3 class="text-xl font-bold mb-4">connect</h3>
          <ul class="space-y-2 list-inside list-none">
            <li class="text-medium hover:underline text-white">linkedin</li>
            <li class="text-medium hover:underline text-white">facebook</li>
            <li class="text-medium hover:underline text-white">twitter</li>
            <li class="text-medium hover:underline text-white">telegram</li>
          </ul>
        </div>
      </div>
      <h2 class="text-whte">2025 City Administration. All rights reserved.</h2>

    </footer>

  )
}
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
