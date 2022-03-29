
<script>
        
		const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
			});
		});

  var data = {
			  "english": 
			  {
			    "title": "Aristotelis Agoratsios",
			    "description": 
				    "I am a graduate of the Department of Industrial Informatics of the University of Western Macedonia in Grecce.My IT experience comes from nearly 10 years of work in Public and Private Education and various IT companies as IT Support Technician, Web Developer and Web Designer. There I confirmed my inclination in this field and I believe that I could develop my creative thinking and talent.Also I'm a passionate developer but more importantly I'm passionate about technology.My expertise is in the area of Responsive Web Design as Web Developer. With every line of code, I strive to make the web a beautiful place.",
			  },
			  "greek": 
			  {
			    "title": "Αριστοτέλης Αγοράτσιος",
			    "description": 
				    "Ο ίδιος ο πόνος είναι πολύς πόνος Η επιλογή να μην επιτύχει τον πόνο σπρώχνει πίσω στην αλήθεια, και επομένως λιγότερο πιθανό να ακολουθήσει αυτή και τον πόνο. Δεν πρέπει να αποδέχονται αυτές τις υποχρεώσεις και πρέπει να απορριφθούν χωρίς καμία διάκριση μεγάλης ενόχλησης στην επιλογή τους, η ευχαρίστηση είναι η συνεπακόλουθη πτώση και το λάθος του εφευρέτη τις απορρίπτει επειδή δεν δέχτηκαν τίποτα πιο σκληρό, τη ζωή και τους μεγαλύτερους κόπους, σαν να γεννηθήκατε αξίζει να συναντήσετε! Αυτό αποτρέπει ορισμένους από τους πιο άξιους κατηγόρους μας, δικαίως! Ο σοφός, καθώς υπολογίζουμε στη σκληρή δουλειά όσων αναφέρονται στην εξύμνηση των αγκαθωτών καθηκόντων του γέρου, απορρίπτει κάθε ευχαρίστηση στις απολαύσεις ή τις απολαύσεις που είναι υποχρεωμένος να αποφεύγει επειδή έχει μεγάλη σημασία. Αφήστε τον να φύγει."
			  }
			}
            
</script>     




window.location.href = 'https://esvelventou.gr/';      