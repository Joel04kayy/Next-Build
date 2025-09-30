// Placeholder image URLs for development
export const placeholderImages = {
  // Hero images
  'gaming-setup-1': 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1920&h=1080&fit=crop&crop=center',
  'workstation-setup': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop&crop=center',
  'custom-build-1': 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1920&h=1080&fit=crop&crop=center',
  
  // Gallery images
  'gaming-build-1': 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop&crop=center',
  'gaming-build-2': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
  'gaming-build-3': 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop&crop=center',
  'workstation-build-1': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center',
  'workstation-build-2': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
  'custom-build-1': 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop&crop=center',
  
  // Testimonial images
  'testimonial-1': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  'testimonial-2': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'testimonial-3': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  'testimonial-4': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
}

export const getPlaceholderImage = (key: string): string => {
  return placeholderImages[key as keyof typeof placeholderImages] || 'https://via.placeholder.com/400x300?text=Image+Coming+Soon'
}
