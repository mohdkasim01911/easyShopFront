import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Pagination from '../Pagination'; 
import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../../store/Reducers/productReducer';

const Products = () => {


    const dispatch = useDispatch();
    
    const { products, totalProduct } = useSelector(state => state.product);

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)

     useEffect(()=>{
            
              const obj = {
    
                   parPage : parseInt(parPage),
                   page : parseInt(currentPage),
                   searchValue
              }
              dispatch(get_products(obj))
          },[searchValue, currentPage, parPage])




    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[#000000] font-semibold text-lg mb-3'>All Products</h1>

            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue} />


                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map((d, i) => <tr key={i}>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{i + 1}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <img className='w-[45px] h-[45px]' src={d.images[0]} alt="" />
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{d?.name?.slice(0,15)}...</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{d.category}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{d.brand}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>${d.price}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                         
                                         {
                                            d.discount === 0 ? <span>No Discount</span> : <span>%{d.discount}</span>
                                          }

                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{d.stock}</td>

                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link to={`/seller/dashboard/edit-product/${d._id}`}  className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'> <FaEdit /> </Link>
                                            <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'> <FaEye /> </Link>
                                            <Link className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'> <FaTrash /> </Link>
                                        </div>

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

                {
                    totalProduct <= parPage ? "" : <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItem={3}
                    />
                </div>

                }


            </div>
        </div>
    );
};

export default Products;