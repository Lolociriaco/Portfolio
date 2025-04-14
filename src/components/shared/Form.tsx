import { montThin } from "@/lib/fonts";
import Swal from "sweetalert2";


export const Form = () => {
    //Sent form  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form  = event.currentTarget;
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "d10370ef-2e06-4174-8d21-6f6c1090e4c8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out! I'll get back to you as soon as possible.",
            icon: "success",
            color: "oklch(0.869 0.022 252.894)",
            confirmButtonColor: "oklch(0.373 0.034 259.733)",
            background: "oklch(0.279 0.041 260.031)",
            backdrop: `oklch(0.293 0.066 243.157, 0.6)`
          })
          .then(() => {
            // Reset form
            form.reset();
          }) 

    }
  };


  return (
    <form onSubmit={onSubmit} className="w-full space-y-8">
        <div>
            <label
            htmlFor="name"
            className={`${montThin.className}block mb-2 text-md font-medium text-gray-300`}
            >
            Name
            </label>
            <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Your name"
            required
            />
        </div>
        <div>
            <label
            htmlFor="email"
            className={`${montThin.className}block mb-2 text-md font-medium text-gray-300`}
            >
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            className="block p-3 w-full text-sm rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
            placeholder="youremail@gmail.com"
            required
            />
        </div>
        <div className="sm:col-span-2">
            <label
            htmlFor="message"
            className={`${montThin.className}block mb-2 text-md font-medium text-gray-300`}
            >
            Message
            </label>
            <textarea
            id="message"
            name="message"
            className="block p-2.5 w-full h-60 text-sm text-gray-900 rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-primary-500 focus:border-primary-500"
            placeholder="Your message"
            ></textarea>
        </div>
        <button
            type="submit"
            className="py-3 px-5 text-md font-medium  focus:outline-none rounded-lg border focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 transition-all duration-200"
        >
            Send message
        </button>
    </form>
  )
}
