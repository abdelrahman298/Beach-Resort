import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { WithRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loading />
    }

    return (
        <>
            < RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}
export default WithRoomConsumer(RoomContainer)





// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomList from './RoomList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 const { loading, sortedRooms, rooms } = value
//                 if (loading) {
//                     return <Loading />
//                 }

//                 return (
//                     <div>
//                         Hello from Room Container
//                         < RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 )
//             }
//             }
//         </RoomConsumer >
//     )
// }
