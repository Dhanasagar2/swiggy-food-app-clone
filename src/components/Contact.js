const Contact= () => {
    return(
        <div>
            <h1 className="font-bold text-3xl p4 m-4">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2 rounded-md " placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2 rounded-md " placeholder="message"/>
                <button className= " border border-black p-2 m-2 rounded-lg bg-gray-300">Submit</button>
            </form>
        </div>
    );
};

export default Contact;