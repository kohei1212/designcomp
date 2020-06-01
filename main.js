$(function () {
	"use strict";

	// ハンバーガーメニューをクリックした時のアクション
	$("#burger").click(() => {
		const $rotate = $(this).find("span"); //#burgerのついた要素以下のspanタグを取得
		// console.log(this);
		$rotate.toggleClass("rotate"); //取得したspanタグにrotateクラスを付与
		$("#h_menu_wrapper").toggleClass("open"); //#h_menu_wrapperのついたタグにopanクラスを付け外しする
	});

	// メニューの枠以外の部分をクリックした時のアクション
	$("#h_menu-bg").click(() => {
		// console.log(this);
		const $rotate = $("#burger").find("span"); //#burgerのついた要素以下のspanタグを取得
		$rotate.removeClass("rotate"); //取得したspanタグにrotateクラスを削除
		$("#h_menu_wrapper").removeClass("open"); //#h_menu_wrapperのついたタグにopanクラスを削除
	});

	// ハンバーガーメニュー内のリンクをクリックした時のアクション
	$('a[href^="#"]').click(function () {
		//#から始まるhrefを持ったaタグをクリック
		// console.log(this);
		const speed = 600; //変数speedに500を代入
		const href = $(this).attr("href"); //クリックしたaタグのhref属性の中身を取得
		// console.log(href);
		const target = $(href == "#" || href == "" ? "html" : href); //#か空白ならtargetに'html'を代入それ以外は取得したhrefを代入
		// console.log(target);
		//↑は↓の簡略版
		/*  
            if (href == '#' || href == "") {
                const target = 'html';
            } else {
                const target = href;
            }
            */

		const position = target.offset().top; //targetの一番上の位置を取得
		$("html, body").animate({ scrollTop: position }, speed, "swing"); //アニメーションでふんわりとスクロール

		const $rotate = $("#burger").find("span"); //#burgerのついた要素以下のspanタグを取得
		$rotate.removeClass("rotate"); //取得したspanタグにrotateクラスを削除
		$("#h_menu_wrapper").removeClass("open"); //#h_menu_wrapperのついたタグにopanクラスを削除

		return false;
	});
});
