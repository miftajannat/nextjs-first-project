
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/newsletter";


export default function footer() {
    return (
      <footer className="bg-gray-50">
        <Newsletter />
        <div className="container mx-auto justify-center py-12">
        <div className="py-5">
            <div className="flex gap-6 justify-center">
            <Link href={"/"}>
                  <ImFacebook color='#888888' />
                </Link>
          
        
                <Link href={"/"}>
                  <ImTwitter color='#888888' />
                </Link>
                         <Link href={"/"}>
                  <ImYoutube color='#888888' />
                </Link>
            </div>
            <p className="PY-5 text-gray-400 text-center">Copyright©2022 All rights reserved|Lorem ipsum dolor sit amet.</p>
            <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
        </div>
      </footer>
    );
  }
