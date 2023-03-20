const AdminInput = (props) => {
    const { field, type='text', name, handleChangeHotel } = props

    return(
        <input
            onChange={handleChangeHotel}
            type={type}
            name={name}
            placeholder={`Hotel ${field}`}
            value={field}
        />
    )
}

export default AdminInput
