import silhouetteImage from "@assets/image_1755280738059.png";

export default function SilhouetteSVG({ className = "w-96 h-96" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <img 
        src={silhouetteImage} 
        alt="Boy silhouette" 
        className="w-full h-full object-contain filter drop-shadow-lg"
        style={{ 
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
        }}
      />
    </div>
  );
}