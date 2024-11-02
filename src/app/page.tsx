import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {
       <section className="projectContainer">
       <div className="textSection">
         <h2>
           PROJECT <br />
           <strong>Lorum</strong>
         </h2>
 
         <div className="navigation">
           <button className="navButton">←</button>
           <button className="navButton">→</button>
         </div>
 
         <p className="pageInfo">01 / 02</p>
         <a href="#" className="viewProject">
           VIEW PROJECT →
         </a>
       </div>
 
       <div className="imageContainer">
         <img
           src="Rectangle.png" 
           alt="Modern building"
           className="projectImage"
         />
       </div>
     </section>
        
      }
      <br />
      <br />
      {
         <div className="flex flex-col md:flex-row items-center px-8 py-16 bg-gray-100">
         <div className="grid grid-cols-2 gap-4 mr-8 flex-1">
           <div className="rounded overflow-hidden">
             <img src="1.png" alt="1" className="w-full h-auto" />
           </div>
           <div className="rounded overflow-hidden">
             <img src="2.png" alt="2" className="w-full h-auto" />
           </div>
           <div className="rounded overflow-hidden">
             <img src="3.png" alt="3" className="w-full h-auto" />
           </div>
         </div>
         <div className="flex-1">
           <h2 className="text-4xl text-gray-600">About</h2>
           <p className="text-gray-700 my-4">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa quaerat molestias officia earum fugiat dicta voluptates sequi beatae amet.
           </p>
           <button className="flex items-center text-sm font-bold text-gray-700 hover:text-black">
             Read More
             <span className="ml-1 transform transition-transform duration-300">→</span>
           </button>
         </div>
       </div>
      }
      <br />
      <br />
      {    
    <div className="text-center px-8 py-16 bg-white">
    <h2 className="text-6xl text-gray-300 mb-12">Main Focus/Mission Statement</h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      <div className="flex flex-col items-start max-w-xs">
        <div className="text-8xl font-bold text-gray-200">1</div>
        <p className="text-gray-700 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores asperiores dolorem sed incidunt.</p>
      </div>
      <div className="flex flex-col items-start max-w-xs">
        <div className="text-8xl font-bold text-gray-200">2</div>
        <p className="text-gray-700 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit beatae veniam quaerat exercitationem esse.</p>
      </div>
    </div>
  </div>
      }
      {
         <div className="text-center px-8 py-16">
         <h2 className="text-6xl text-gray-300 mb-8">Our Projects</h2>
         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
           <div className="relative overflow-hidden rounded">
             <img src="sample.png" alt="Sample Project" className="w-full h-auto" />
             <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
               <h3 className="text-2xl">Sample Project</h3>
               <a href="#" className="mt-2 text-sm underline">View More →</a>
             </div>
           </div>
           <div className="relative overflow-hidden rounded">
             <img src="4.png" alt="Project 2" className="w-full h-auto" />
           </div>
           <div className="relative overflow-hidden rounded">
             <img src="6.png" alt="Project 3" className="w-full h-auto" />
           </div>
           <div className="relative overflow-hidden rounded">
             <img src="7.png" alt="Project 4" className="w-full h-auto" />
           </div>
           <div className="relative overflow-hidden rounded">
             <img src="6.png" alt="Project 5" className="w-full h-auto" />
           </div>
           <div className="relative overflow-hidden rounded">
             <img src="3.png" alt="Project 6" className="w-full h-auto" />
           </div>
         </div>
         <a href="#" className="inline-flex mt-8 py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-500 transition-all">
           All Projects →
         </a>
       </div>
      }

      {
         <section className="flex justify-center px-8 py-16 bg-white">
         <div className="flex flex-col md:flex-row gap-8 max-w-screen-lg w-full">
           <div className="flex-1">
             <h2 className="text-4xl text-gray-300 mb-4">Contact Us</h2>
             <form className="flex flex-col gap-4">
               <input type="text" name="name" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-200" />
               <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-200" />
               <input type="email" name="email" placeholder="E-mail" required className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-200" />
               <input type="text" name="interested" placeholder="Interested In" className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-200" />
               <textarea name="message" placeholder="Message" required className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-200"></textarea>
               <button type="submit" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500 transition-all">Send Email</button>
             </form>
           </div>
           <div className="flex-1">
             <img src="9.png" alt="Contact Image" className="w-full max-w-auto rounded-lg" />
           </div>
         </div>
       </section>
      }

      {
<Footer />
      }
    </div>
  );
}
