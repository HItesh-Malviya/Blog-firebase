import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { db } from '../firebaseInit'
import { collection, setDoc, doc, onSnapshot, deleteDoc} from 'firebase/firestore'










export default function Blog1() {

    const [formData, setFormData] = useState({ title: "", content: "" })
    const [blogs, setBlogs] = useState([])
    const titleRef = useRef(null)


    useEffect(() => {

        titleRef.current.focus();

    }, [])

    useEffect(() => {
        // For realtime

        const unsub = onSnapshot(collection(db, "blog1"), (snapShot) => {
            const blog1 = snapShot.docs.map((doc) => {
                return{
                id: doc.id,
                ...doc.data()
                }
            })

            setBlogs(blog1)
        })
    }, [])


    async function handleSubmit(e) {
        titleRef.current.focus();
        e.preventDefault();
        
        // setBlogs([{ title: formData.title, content: formData.content }, ...blogs])

        const docRef = doc(collection(db, "blog1"));
        await setDoc(docRef, {
            title: formData.title,
            content: formData.content,
            createdOn: new Date()
        })


        setFormData({title:"", content:""})

    }


    async function handleRemove(i) {
        // setBlogs(blogs.filter((blog, index) => index !== i))
        await deleteDoc(doc(db,"blog1", i));

    }



    return (
        <>
            <div className='section'>
                <form onSubmit={handleSubmit}>
                    <label className='label'>TITLE</label>
                        <input className='input' placeholder='enter title' ref={titleRef} value={formData.title} onChange={(e) => setFormData({ title: e.target.value, content: formData.content })} />
                    

                    <label className='label'>CONTENT</label>
                        <input className='input content' placeholder='enter Content' value={formData.content} onChange={(e) => setFormData({ title: formData.title, content: e.target.value })} />
                    

                    <button>Add</button>


                </form>
            </div>
<hr />
            
{blogs.map((blog,i) => (
            <div className='blog' key={i}>
                <h1>{blog.title}</h1>
                <h2>{blog.content}</h2>

                <button onClick={() => handleRemove(blog.id)}>Delete</button>


            </div>
        ))}
            


        </>
    )
}
