import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

// const blogsData = [
//   {
//     id: 1,
//     title: 'Blog 1',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
//   {
//     id: 2,
//     title: 'Blog 2',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
// ]

class BlogsList extends Component {
  state = {blogsData: [], isLodeing: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: updateData, isLodeing: false})
  }

  render() {
    const {blogsData, isLodeing} = this.state
    return (
      <div className="blog-list-container">
        {isLodeing ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
