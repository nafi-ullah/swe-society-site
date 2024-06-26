import GalleryCard from "../gallerypage/GalleryCard";

function GallerySection() {
  return (
    <div>
      <h1>Gallery</h1>
      <GalleryCard />
      <button>See More</button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default GallerySection;
