import Navbar from "./Navbar";
import { useState } from "react";

function Account(){

    const [initialAmount, setInitialAmount] = useState('') ;
    const [balance, setBalance] = useState(0) ; 
    const [transactionAmount, setTransactionAmount] = useState('') ; 
    const [transactionReason, setTransactionReason] = useState('') ; 
    const [transactions, setTransactions] = useState([]) ; 

    const updateAmount = () =>{
        if(initialAmount){
            setBalance(parseFloat(initialAmount)) ; 
            setInitialAmount('');
        }
    }

    const addAmount = () =>{
        if(transactionAmount && transactionReason){
            let newAmount = parseFloat(transactionAmount) ; 
            let newBalance = balance + newAmount ; 
            let transaction = {
                type: 'CREDIT',
                amount: newAmount,
                reason: transactionReason,
                date: new Date().toDateString(),
                balance:newBalance,
            }
            setBalance(newBalance) ;
            setTransactions([transaction, ...transactions]) ;  
            setTransactionAmount('') ; 
            setTransactionReason('') ; 
        }
    }

    const subtractAmount = () =>{
        if(transactionAmount && transactionReason){
            let newAmount = parseFloat(transactionAmount) ; 
            let newBalance = balance - newAmount ; 
            let transaction = {
                type: 'DEBIT',
                amount: newAmount,
                reason: transactionReason,
                date: new Date().toDateString(),
                balance:newBalance,
            }
            setBalance(newBalance) ; 
            setTransactions([transaction, ...transactions]) ;  
            setTransactionAmount('') ; 
            setTransactionReason('') ; 
        }
    }

    return(
        <>
            <div className = "bg-black min-h-screen w-full overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
                <Navbar />
                <div className = "w-full flex flex-row items-center justify-center">
                    <div className = "w-[60vw] text-center">
                        <h1 className = "text-[#0D00FF] text-3xl font-bold mb-6">Your Account</h1>

                        <input type="number" className = "bg-white w-[70%] p-2 pl-6 rounded-[5px] outline-none" placeholder="Enter your initial amount" value = {initialAmount} onChange={(e) => setInitialAmount(e.target.value)}/>

                        <button className = "bg-[#0D00FF] text-white ml-10 p-2 px-4 rounded-[5px] font-[500] cursor-pointer transition-all duration-450 hover:bg-white hover:text-[#0D00FF] mb-10" onClick={updateAmount}>Update</button>

                        <h1 className = "text-[28px] text-white font-bold mb-5">Your Balance: <span className = "text-[#2bba11]">Rs. {balance.toFixed(2)}</span></h1>

                        <input type="number" placeholder="Enter the transaction amount" className = "bg-white w-[80%] p-2 pl-5 rounded-[5px] outline-none mb-7" value = {transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)}/>
                        
                        <input type="text" placeholder="Enter the transaction reason" className = "bg-white w-[80%] p-2 pl-5 rounded-[5px] outline-none" value = {transactionReason} onChange={(e) => setTransactionReason(e.target.value)}/>

                        <div className = "mt-7">
                            <button className = "bg-[#2bba11] text-white p-2 px-4 rounded-[5px] font-[500] cursor-pointer hover:bg-[#2aba11a6] mr-25" onClick={addAmount}>Add Money +</button>

                            <button className = "bg-[#C20010] text-white p-2 px-4 rounded-[5px] font-[500] cursor-pointer hover:bg-[#c20010a8]" onClick={subtractAmount}>Spend Money -</button>
                        </div>

                        <div className = "mt-10">
                            <h1 className = "text-4xl font-[700] text-[#0D00FF] mb-5">Transaction History</h1>
                            <div>
                                {(transactions.length === 0)?<div className = "text-red-600 text-[16px] font-[600]">No transactions yet</div>:<div>
                                        {transactions.map((transaction, index) =>(
                                            <div key={index} className = "py-5 mb-6 mt-5 flex justify-center items-center border-[2px] border-slate-600 rounded-[10px]">

                                                <div className = "text-center w-full max-w-2xl pl-5">

                                                <div className = "flex flex-row justify-between">
                                                    <p className = "text-white font-[600] text-[20px]">{transaction.reason}</p>
                                                    <p className = "text-slate-600 text-[16px] font-[500]">{transaction.date}</p>
                                                </div>
                                                <div className = "flex flex-row justify-between">
                                                    <p className = {`${transaction.type === 'CREDIT'?`text-[#2bba11] font-[600] text-[20px]`:`text-[#C20010] font-[800] text-[20px]`}`}>Rs. {transaction.amount}</p>

                                                    <p className = {`${transaction.type === 'CREDIT'?`text-[#2bba11] font-[800] text-[20px]`:`text-[#C20010] font-[800] text-[20px]`}`}>{transaction.type}</p>
                                                </div>
                                                <div className = "text-white text-[18px] font-[800]">
                                                    Current Balance: Rs. {transaction.balance}
                                                </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Account ; 