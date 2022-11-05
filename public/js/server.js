// ******************************************************************************************************************************//
// * MIT License
// * Copyright (c) 2022 Tristan Santos
//
// * Permission is hereby granted, free of charge, to any person obtaining a copy
// * of this software and associated documentation files (the "Software"), to deal
// * in the Software without restriction, including without limitation the rights
// *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// * copies of the Software, and to permit persons to whom the Software is
// * furnished to do so, subject to the following conditions:
//
// * The above copyright notice and this permission notice shall be included in all
// * copies or substantial portions of the Software.
// *
// * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// * OFTWARE.
// *********************************************************************************************************************************//
//
// * WARNING!! THIS WEBSITE IS NOT FOR COMMERCIAL USE AND IS NOT MEANT TO DESTRUCT OTHER WORKS BY ANY MEANS.
//
//
// * THIS IS FOR EDUCATIONAL PURPOSES ONLY, AND PERMITTED BY THE OWNER OF THE TARGETED WEBSITE
//
//**************************************************************************************************************************************//
//
// * This is the Link for the owners Repository:
// 																		https://github.com/tristan-santos
//
// * This is the Link for this websites repository
//
//**************************************************************************************************************************************//

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js'
import { convert } from './script.mjs'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDF9AeGoi06xB2-sMH9Qjn2l9YqR1cgS_w',
	authDomain: 'tristan-victor-presentation.firebaseapp.com',
	projectId: 'tristan-victor-presentation',
	storageBucket: 'tristan-victor-presentation.appspot.com',
	messagingSenderId: '777873716301',
	appId: '1:777873716301:web:e8aa847cbacecbad1d5804',
	measurementId: 'G-K0KB71KEZE',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

parser('Tristan Joseph', '104737100252', 'Santos')

async function parser(name, lrn, surname) {
	let con = await convert(name)
	try {
		function undefinedChecker() {
			return new Promise((resolve, reject) => {
				if (
					name != undefined &&
					lrn != undefined &&
					surname != undefined
				) {
					resolve('Not Undefined')
				} else {
					reject({
						isErrorName: name,
						isErrorLrn: lrn,
						isErrorSurname: surname,
					})
				}
			})
		}
		undefinedChecker()
			.then((value) => {
				let names = name.replaceAll(' ', '+')
				const obj = {
					Lrn: lrn,
					Name: names,
					Surname: surname,
				}

				class xss {
					constructor() {
						return
					}

					penetrate(nm, ln, sn) {
						let str = `http://tlogic.uk.nf/t-logic_update.php?photo=${ln}_${nm}.JPG&login_username=${nm}+${sn}&fname=${nm}&lname=${sn}&firstname=${nm}&lastname=&username=${ln}&password=&actcode=&submit=Continue+to+Profile+Mngr.`
						console.log(str)
					}
				}
				let Class = new xss()
				Class.penetrate(names, lrn, surname)
				console.log(value)
				console.log(obj.Name)
			})
			.catch((error) => {
				console.log(error)
			})
	} catch (err) {
		console.log(err)
	}
}
