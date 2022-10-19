export interface Foundation{
    id: number
    name: string
    address: string
    description: string
    country: string
    image: string
    found_course: Course[]
}

export interface Course{
    id: number
    title: string
    description: string

}

export interface Order{
    id: number
    price: string
    course: Course[]
    about: string
}