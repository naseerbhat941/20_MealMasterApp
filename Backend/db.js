import {connect} from 'mongoose'
export const connectToDb = (url) => {
  return connect(url)
}