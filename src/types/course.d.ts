// types/course.d.ts
export interface Course {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    rating: string;
    level: string;
    price: string;
    students?: string;
    lastUpdated?: string;
    testimonial?: string;
  }
  
  export interface VideoCourse extends Course {
    duration: string;
    instructor: string;
    instructorBio?: string;
    videoId: string;
    modules: number;
    completion: string;
    curriculum?: {
      title: string;
      duration: string;
      lessons: string[];
    }[];
    requirements?: string[];
    whatYouWillLearn?: string[];
  }
  
  export interface ArticleCourse extends Course {
    readTime: string;
    author: string;
    authorBio?: string;
    image: string;
    publishDate: string;
    content?: {
      type: string;
      title: string;
      text: string;
    }[];
  }