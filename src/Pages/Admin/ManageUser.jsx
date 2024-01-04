import { useEffect, useState } from "react"
const Users = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    'user6',
    'user7',
    'user8',
    'user9',
    'user10'
]
const ManageUser = () => {

    const [users,setUsers] = useState(Users)
    const [search,setSearch] = useState('')
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
    useEffect(()=>{
        if(search === ''){
            setUsers(Users)
        }
        else{
            setUsers(users.filter((user)=>{
                if(user.toLowerCase().includes(search.toLowerCase()))
                return user
            }))
        }
    },[search,users])
  return (
    <div className="w-full h-screen bg-green-50">
        <div className="h-fit w-full">
            <div className="flex justify-between max-md:flex-col items-center px-4 py-2">
                <div className="text-xl font-semibold">
                    Manage Users
                </div>
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Search" value={search} onChange={handleChange} className="border border-solid border-Green border-opacity-40 rounded-lg px-4 py-1 outline-none" />
                    <button className="bg-Green text-white px-4 py-1 rounded-lg">Search</button>
                </div>
            </div>
        </div>
        <div className="h-5/6">
            <ul className="p-4 max-h-full overflow-y-auto w-full">
                {
                    users.length === 0 ? <div className="text-center text-xl font-semibold">No Files Found</div> :
                    users.map((user,index)=>{
                        return <li key={index}  className="bg-white flex justify-between shadow-sm border border-solid border-Green border-opacity-40 text-xs h-12 items-center my-2 px-4 w-full rounded-lg">
                        <span>
                        {user}
                        </span>
                        <button className="bg-Green bg-opacity-80 text-white px-4 py-1 rounded-lg">Edit</button>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default ManageUser