$("#page_h1").textillate({
		
		//selector:'.texts',
		loop:true,
		minDisplayTime:1000,
		//autoStart:false,
		
		in: {
			effect:'bounceIn',
			//delayScale:0.01,
			//delay:1000
			//sync:true,
			//shuffle:true,
			//reverse:true
			
			
		},
		out: {
			effect:'hinge',
                        shuffle:true,
			callback:function() {
				//alert('hello');
			}
		}
	});  