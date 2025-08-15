import silhouetteImage from "@assets/image_1755281273406.png";

export default function SilhouetteSVG({ className = "w-96 h-96" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <img 
        src={silhouetteImage} 
        alt="Boy silhouette" 
        className="w-full h-full object-contain transform scale-x-[-1]"
        style={{ 
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}