import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card';
import { MAX_FREE_COUNTS } from '@/constants';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import { Progress } from './ui/progress';
import { useProModal } from '@/hooks/use-pro-modal';

type Props = {
    apiLimitCount:number,
    isPro:boolean
}

const FreeCounter = ({apiLimitCount,isPro=false}: Props) => {
    const [mounted, setMounted] = useState(false);
  const {isOpen,onClose,onOpen} = useProModal();

    useEffect(() => {
        setMounted(true);
      }, []);
    
      if (!mounted) {
        return null;
      }
      if (isPro) {
        return null;
      }
      
  return (
    <div className="px-3">
    <Card className="bg-white/10 border-0">
      <CardContent className="py-6">
        <div className="text-center text-sm text-white mb-4 space-y-2">
          <p>
            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
          </p>
          <Progress className="h-3 " value={(apiLimitCount / MAX_FREE_COUNTS) * 100}  />
        </div>
        <Button  variant="premium" className="w-full" onClick={onOpen}>
          Upgrade
          <Zap className="w-4 h-4 ml-2 fill-white" />
        </Button>
      </CardContent>
    </Card>
  </div>
  )
}

export default FreeCounter