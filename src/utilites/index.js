import toast from "react-hot-toast";
const geteItemLocalStorage = ()=>{
    let cart = [];
    const storcart = localStorage.getItem('cart');
    if(storcart){
        cart = JSON.parse(storcart);
    }
    return cart;
}

// savecatLocalStorage

const saveCart = (blog) =>{
    const saveCart = geteItemLocalStorage();
    const chekCart = saveCart.find(p => p.id == blog.id);
    if(chekCart){
        return toast.error('Already Bookmarked!')
    }
    saveCart.push(blog);
    localStorage.setItem('cart',JSON.stringify(saveCart));
    return toast.success('Blog Bookmarked successfully!');
}


// Delete cart

const deleteCart = (id) =>{
    const storcart = geteItemLocalStorage();
    const remaining = storcart.filter( d => d.id !== id);
    localStorage.setItem('cart', JSON.stringify(remaining));
    return toast.success('Blogs Delete successfully!')

}
export {geteItemLocalStorage,saveCart,deleteCart};