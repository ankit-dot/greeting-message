import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { countryCodes } from "@/data";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Toaster, toast } from 'sonner'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendMessage = () => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; 
        if (isSuccess) {
          resolve("Message sent successfully!");
        } else {
          reject("Failed to send the message.");
        }
      }, 1000);
    });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    if (!/^\d+$/.test(phoneNumber)) {
      toast.error("Please Enter a Valid Phone Number")
      return;
    }


    try {
      const successMessage = await sendMessage();
      toast.success("Message Sent")
    } catch (errorMessage) {
      toast.error("Something Went Wrong");
    }
  };

  const handlePhoneNumberChange = (e:any) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };
  return (
   <div className = "overflow-hidden" >
    <Toaster richColors/>
    <Sidebar/>
    <main className='sm:ml-[300px] w-full h-[100vh]' style = {{backgroundColor: 'rgba(248, 248, 248, 1)'}}>


      <div className = "ml-6 pt-6">
          <h3 className = "font-semibold text-base">Phone Number</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex  mb-2 mt-1">
      <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className=" border-gray-300 rounded font-semibold text-lg"
          style = {{border: "1px solid rgba(235, 235, 235, 1)", borderRadius :"8px", color:"rgba(34, 34, 34, 1)"}}
        >
          {countryCodes.map((country,index) => (
            <option key={index} value={country.code}>
              {country.code}
            </option>
          ))}
        </select>

        <div className = " w-[123px] font-medium text-lg ml-3"  style = {{border: "1px solid rgba(235, 235, 235, 1)", borderRadius :"8px" ,color:"rgba(34, 34, 34, 1)"}}>
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="border border-gray-300 rounded p-2 flex-1"
          pattern="\d*"
        />
        </div>
      </div>
      <Button
        type="submit"
        className="bg-blue-500 font-medium text-lg text-white rounded p-2 w-[150px] flex justify-center"
        style = {{borderRadius:"8px"}}
        
      >
        Send message
      </Button>
    </form>
      </div>
    
    
    </main>
   </div>
  );
}
