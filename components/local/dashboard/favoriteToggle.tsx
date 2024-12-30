"use client"
import { Heart } from 'lucide-react';

// components/Favorite.tsx
export default function Favorite() {
    const performAction = (e: React.MouseEvent<SVGSVGElement>):any => {
        e.preventDefault();
        console.log("Favorite")
    }

    return <Heart onClick={performAction}></Heart>
}
