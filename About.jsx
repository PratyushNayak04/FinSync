import Navbar from "./Navbar" ; 


export default function About(){
    return(
        <>
        <div className = "bg-black h-[100vh] text-white">
            <Navbar />
            <div className = "px-40 mt-10">
                <h1 className = "text-[#0D00FF] text-5xl font-[700] mb-8">About FinSync</h1>

                <h2 className = "text-3xl font-[500] text-[#2ABE10] mb-8">Effortless Money Management with Complete Security</h2>

                <p className = "mb-8 text-[16px] font-[500]">Managing your finances has never been easier. Our platform provides a secure and intuitive way to track all your bank transactions, account balances, and spending patterns in one place. Whether it’s salary credits, bill payments, or daily expenses, you get a clear, real-time overview of your financial activity. With smart categorization and detailed insights, you can understand where your money goes and make informed financial decisions effortlessly.</p>

                <p className = "mb-8 text-[16px] font-[500]">Security is our top priority. Your banking details and transaction history are encrypted and stored safely, ensuring complete privacy. With advanced security protocols and real-time alerts, you stay protected from unauthorized access and suspicious transactions. Our user-friendly interface ensures a smooth experience, making it easy to analyze spending, set budgets, and take control of your finances—all with a few clicks. Take charge of your financial future with confidence!</p>

                <p className = "mb-8 text-[16px] font-[500]">Designed and developed by Pratyush Nayak <span className = "text-gray-700">obviously with the help of ChatGPT</span></p>
            </div>
        </div>
        </>
    )
}