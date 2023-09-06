import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'


function SearchBox() {

    const [keyword, setKeyword] = useState('')

    const history = useNavigate()
    const location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            history(`/?keyword=${keyword}`)
        }else{
            history(location.pathname)
        }
    }

  return (
    <Form onSubmit={submitHandler} className="d-flex">
            <Form.Control
                type='search'
                name='q'
                placeholder='Search'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5 me-2'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                Submit
            </Button>
        </Form>
  )
}

export default SearchBox
