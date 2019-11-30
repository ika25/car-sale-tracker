// This will contain HTTP request (i dont want this within my components,i want within an external file)

// Creatin external file to export object which will have functions tat make HTTP request
export default {
    //This will return every single cars within our cars collection
    getCars: ()=>{
        return fetch('/cars')
                .then(res => res.json())
                .then(data => data);
    },
    deleteCars : (_id)=>{
        return fetch(`/cars/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },

}