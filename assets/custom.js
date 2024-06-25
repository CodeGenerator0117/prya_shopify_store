$(document).ready(function () {
    $("ul.builder_tabs li").click(function () {
        var tab_id = $(this).attr("data-tab");
        $("ul.builder_tabs li").removeClass("current"),
            $(".builder_tabstabcontent").removeClass("current"),
            $(this).addClass("current"),
            $("#" + tab_id).addClass("current");
        var sp = $(this).find("span").html();
        $(".current_builder_active_tabs").html(sp)
    }),
        $("ul.tabs li").click(function () {
            $(".tab-content").css("opacity", "0");
            var tab_id = $(this).attr("data-tab");
            $("ul.tabs li").removeClass("current"),
                $(".tab-content").removeClass("current"),
                $(this).addClass("current"),
                $("#" + tab_id).addClass("current"),
                setTimeout(function () {
                    $(".tab-content").css("opacity", "1"),
                        checkClasses()
                }, 250)
        }),
        checkScreenSize();
    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 768) {
            var onInitializedFnm = function () {
                setTimeout(function () {
                    $(".product-balloon-letter-pendant .product-variant-option-wrapper").addClass("loadedd")
                }, 500)
            };
            $(".col-one.on ul:not(.nocarousel)").addClass("owl-carousel"),
                $(".col-one.on ul:not(.nocarousel)").owlCarousel({
                    margin: 10,
                    loop: !1,
                    items: 7,
                    nav: !1,
                    stagePadding: 10,
                    autoplay: !1
                })
        }
    }
    function refreshCarousel() {
        owlscontext.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"),
            $(".slider-content-text-info").addClass("owl-carousel"),
            $(".slider-content-text-info").owlCarousel({
                margin: 10,
                loop: !0,
                nav: !1,
                stagePadding: 60,
                autoplay: !0,
                autoplaySpeed: 2200,
                autoplayTimeout: 2200,
                slideTransition: "linear",
                autoplayHoverPause: !0,
                onInitialized: onInitializedFn,
                onResize: refreshCarousel,
                responsive: {
                    0: {
                        items: 2,
                        center: !0,
                        stagePadding: 0,
                        loop: !0
                    },
                    600: {
                        items: 2
                    },
                    1e3: {
                        items: 3
                    }
                }
            })
    }
    var owlscontext = $(".slider-content-text-info").owlCarousel({
        margin: 10,
        loop: !0,
        nav: !1,
        stagePadding: 60,
        slideTransition: "linear",
        autoplay: !0,
        autoplaySpeed: 2200,
        autoplayTimeout: 2200,
        autoplayHoverPause: !0,
        onInitialized: onInitializedFn,
        onResize: refreshCarousel,
        responsive: {
            0: {
                items: 2,
                center: !0,
                stagePadding: 0,
                loop: !0
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    });
    function onInitializedFn() {
        setTimeout(function () {
            $(".text-with-slideshow").addClass("loadedd")
        }, 500)
    }
    $(".collection .tab-content ul").addClass("owl-carousel"),
        $(".collection .tab-content ul").owlCarousel({
            margin: 20,
            nav: !0,
            autoplay: !1,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 4
                }
            }
        }),
        $(".related-metafield-ref").owlCarousel({
            margin: 20,
            nav: !0,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 4
                }
            }
        }),
        $(".content-text-info").owlCarousel({
            margin: 10,
            loop: !0,
            nav: !1,
            autoplay: !0,
            autoplayTimeout: 3500,
            autoplayHoverPause: !0,
            items: 1
        }),
        $(".upsell-imagescarousel").owlCarousel({
            margin: 10,
            loop: !1,
            dots: !1,
            nav: !0,
            autoplay: !1,
            items: 1,
            onInitialized: counter,
            onTranslated: counter
        }),
        $(".announcementbar_slider.owl-carousel").owlCarousel({
            margin: 10,
            loop: !0,
            dots: !1,
            nav: !1,
            autoplay: !0,
            items: 1
        }),
        $(".mainimg-slider-letters").owlCarousel({
            items: 1,
            loop: !1,
            nav: !0,
            dots: !1,
            center: !0,
            margin: 10,
            URLhashListener: !0,
            autoplayHoverPause: !0,
            startPosition: "URLHash"
        });
    function counter(event) {
        var element = event.target
            , items = event.item.count
            , item = event.item.index + 1;
        item > items && (item = item - items),
            $("#hottestSellingCount").html(item + "/" + items)
    }
    checkClasses(),
        $(".collection .tab-content ul").on("translated.owl.carousel", function (event) {
            checkClasses()
        });
    function checkClasses() {
        var total = $(".collection #tab-1 ul .owl-stage .owl-item.active").length
            , total2 = $(".collection #tab-2 ul .owl-stage .owl-item.active").length
            , total3 = $(".collection #tab-3 ul .owl-stage .owl-item.active").length
            , total4 = $(".collection #tab-4 ul .owl-stage .owl-item.active").length;
        $(".collection .tab-content ul .owl-stage .owl-item").removeClass("firstActiveItem lastActiveItem"),
            $(".collection #tab-1 ul .owl-stage .owl-item.active").each(function (index) {
                index === 0 && $(this).addClass("firstActiveItem"),
                    index === total - 1 && total > 1 && $(this).addClass("lastActiveItem")
            }),
            $(".collection #tab-2 ul .owl-stage .owl-item.active").each(function (index) {
                index === 0 && $(this).addClass("firstActiveItem"),
                    index === total2 - 1 && total2 > 1 && $(this).addClass("lastActiveItem")
            }),
            $(".collection #tab-3 ul .owl-stage .owl-item.active").each(function (index) {
                index === 0 && $(this).addClass("firstActiveItem"),
                    index === total3 - 1 && total3 > 1 && $(this).addClass("lastActiveItem")
            }),
            $(".collection #tab-4 ul .owl-stage .owl-item.active").each(function (index) {
                index === 0 && $(this).addClass("firstActiveItem"),
                    index === total4 - 1 && total4 > 1 && $(this).addClass("lastActiveItem")
            })
    }
    $(".owl-prev").html('<img src="https://cdn.shopify.com/s/files/1/0666/6744/6590/files/left.svg?v=1681982091" />'),
        $(".owl-next").html('<img src="https://cdn.shopify.com/s/files/1/0666/6744/6590/files/right.svg?v=1681982091" />')
}),
$(document).ready(function () {
    $(".carousel_upsell").owlCarousel({
        margin: 10,
        nav: !1,
        autoplayTimeout: 3500,
        autoplayHoverPause: !0,
        items: 1,
        stagePadding: 40
    }),
        $(".expand-collapse h3").each(function () {
            var tis = $(this)
                , state = !1
                , answer = tis.next("div").slideUp();
            tis.click(function () {
                state = !state,
                    answer.slideToggle(state),
                    tis.toggleClass("active", state)
            })
        });
    var phn = $(".producthandle").val();
    $(".gummies-ref-wrapper .col-one.on ul li a").each(function (i, v) {
        var hr = $(this).attr("href");
        if (hr == phn) {
            $(this).trigger("hover"),
                $(this).hover();
            var titlep = $(this).attr("titlep")
                , img = $(this).attr("timg")
                , mimg = $(this).attr("cimg")
                , limg = $(this).attr("limg")
                , rimg = $(this).attr("rimg")
                , initcolor = $(".onloadcolour").val()
                , colorref = $(this).attr("colorref");
            if (colorref && ($(".dflxstart svg path").each(function () {
                $(this).attr("fill") == initcolor && $(this).attr("fill", colorref),
                    $(this).attr("stroke") == initcolor && $(this).attr("stroke", colorref)
            }),
                $(".col-one.tw svg path").each(function () {
                    $(this).attr("fill") == initcolor && $(this).attr("fill", colorref),
                        $(this).attr("stroke") == initcolor && $(this).attr("stroke", colorref)
                }),
                $(".onloadcolour").val(colorref)),
                img != null && titlep) {
                var titlepref = titlep.toLowerCase();
                titlepref == "white gummie" && (colorref = "#615449"),
                    $(".inforef").html('<span  class="bottom_ref_Section">' + titlep + '</span> <span class="swatchref" style="background-color: ' + colorref + ';">&nbsp;</span>')
            }
            limg != null && $(".lchild .dflxstart img").attr("src", limg),
                mimg != null && $(".col-one.tw img").attr("src", mimg),
                rimg != null && $(".dflxright img").attr("src", rimg)
        }
    }),
        $(".col-one.on ul li a").hover(function () {
            var titlep = $(this).attr("titlep")
                , img = $(this).attr("timg")
                , mimg = $(this).attr("cimg")
                , limg = $(this).attr("limg")
                , rimg = $(this).attr("rimg")
                , initcolor = $(".onloadcolour").val()
                , colorref = $(this).attr("colorref");
            if (colorref && ($(".dflxstart svg path").each(function () {
                $(this).attr("fill") == initcolor && $(this).attr("fill", colorref),
                    $(this).attr("stroke") == initcolor && $(this).attr("stroke", colorref)
            }),
                $(".col-one.tw svg path").each(function () {
                    $(this).attr("fill") == initcolor && $(this).attr("fill", colorref),
                        $(this).attr("stroke") == initcolor && $(this).attr("stroke", colorref)
                }),
                $(".onloadcolour").val(colorref)),
                img != null && titlep) {
                var titlepref = titlep.toLowerCase();
                titlepref == "white gummie" && (colorref = "#615449"),
                    $(".inforef").html('<span  class="bottom_ref_Section">' + titlep + '</span> <span class="swatchref" style="background-color: ' + colorref + ';">&nbsp;</span>')
            }
            limg != null && $(".lchild .dflxstart img").attr("src", limg),
                mimg != null && $(".col-one.tw img").attr("src", mimg),
                rimg != null && $(".dflxright img").attr("src", rimg)
        }),
        $(document).on("click", ".select-dropdown__button", function (e) {
            e.preventDefault(),
                e.stopPropagation(),
                $(this).toggleClass("active"),
                $(this).parents(".wrp-upsell").find(".select-dropdown__list").toggleClass("active")
        }),
        $(document).on("click", ".select-dropdown__list-item", function (e) {
            e.preventDefault();
            var itemAvailable = $(this).attr("isavailable");
            if (itemAvailable != "false") {
                var itemValue = $(this).data("value")
                    , itemImg = $(this).attr("dataimg")
                    , itemPrice = $(this).attr("dataprice")
                    , itemDesc = $(this).find("input").val();
                $(this).parents(".wrp-upsell").find(".upsell-price").html(itemPrice),
                    $(this).parents(".wrp-upsell").find(".pprice p").html(itemPrice),
                    itemDesc && $(this).parents(".wrp-upsell").find(".rte").html("<p>" + itemDesc + "</p>"),
                    $(this).parents(".wrp-upsell").find(".upsell-imagescarouselwrapper").html('<img class="im" src="' + itemImg + '" />'),
                    $(this).parents(".wrp-upsell").find(".img-upsell").find("img").attr("src", itemImg),
                    $(this).parents(".wrp-upsell").find(".upsellproduct-variant-id").val(itemValue),
                    $(this).parents(".wrp-upsell").find(".select-dropdown__button span").text($(this).text()).parent().attr("data-value", itemValue),
                    $(this).parents(".wrp-upsell").find(".select-dropdown__list").toggleClass("active"),
                    $(this).parents(".wrp-upsell").find(".select-dropdown__button").toggleClass("active")
            }
        }),
        $(document).on("click", function (event) {
            !$(event.target).closest(".select-dropdown__button").length && !$(event.target).closest(".select-dropdown__list-item").length && $(".select-dropdown__list").removeClass("active")
        }),
        $(document).on("click", ".modal-toggle", function (e) {
            e.preventDefault();
            var vid = $(".select-dropdown__button").attr("data-value");
            $(".modal.open-" + vid).toggleClass("is-visible")
        }),
        $(".checkboxwrapper").click(function () {
            $(this).find("input").is(":checked") ? ($(".product-form__submit.button").hide(),
                $(".cart-upsell.prdct").addClass("active"),
                $(this).parents("product-info").find(".cart-upsell.prdct").find("button").removeAttr("disabled"),
                $(this).parents("product-info").find(".cart-upsell.prdct").find("a").removeAttr("disabled")) : ($(".product-form__submit.button").show(),
                    $(".cart-upsell.prdct").removeClass("active"),
                    $(this).parents("product-info").find(".cart-upsell.prdct").find("a").attr("disabled", !0),
                    $(this).parents("product-info").find(".cart-upsell.prdct").find("button").attr("disabled", "disabled"))
        });
    var a1 = 1
        , winn = window.location.href;
    winn.includes("onet") ? ($(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/t.png"),
        $('.nocarousel li a[href="onet"]').parent().addClass("activein")) : winn.includes("oner") ? ($(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/r.png"),
            $('.nocarousel li a[href="#oner"]').parent().addClass("activein")) : winn.includes("onee") ? ($(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/e.png"),
                $('.nocarousel li a[href="#onee"]').parent().addClass("activein")) : winn.includes("onea") ? ($(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/A.png"),
                    $('.nocarousel li a[href="#onea"]').parent().addClass("activein")) : winn.includes("ones") && ($(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/s.png"),
                        $('.nocarousel li a[href="#ones"]').parent().addClass("activein"))
}),
$(document).on("click", "div#CartDrawer-Overlay", function (e) {
    $(".drawer__close").trigger("click")
}),
$(document).on("click", ".nocarousel li", function (e) {
    var cli = $(this).find("a").attr("href");
    $(".nocarousel li").removeClass("activein"),
        $(this).addClass("activein"),
        cli.includes("onet") ? $(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/t.png") : cli.includes("oner") ? $(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/r.png") : cli.includes("onee") ? $(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/e.png") : cli.includes("onea") ? $(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/A.png") : cli.includes("ones") && $(".swatchrefltin").attr("src", "https://cdn.shopify.com/s/files/1/0666/6744/6590/files/s.png")
}),
$(document).on("click", ".btn.add-upsell-btn", function (e) {
    e.preventDefault(),
        e.stopPropagation();
    var that = $(this);
    if (that.hasClass("propage") && $(this).attr("disabled"))
        return;
    const cartLink = document.querySelector("#cart-icon-bubble");
    $(this).find("span").hide(),
        $(this).find(".loading-overlay__spinner").removeClass("hidden");
    var id = $(this).parents(".wrp-upsell").find(".select-dropdown__button").attr("data-value")
        , items = {
            id,
            quantity: 1
        };
    $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: items,
        success: function (res) {
            that.parents("#CartDrawer").hasClass("cart-drawer") || $(".product-form__submit.button").trigger("click"),
                $("cart-drawer-items").hasClass("is-empty") ? $.ajax({
                    type: "GET",
                    url: `${routes.cart_url}?view=fullcartdrawer`,
                    success: function (htm) {
                        $("cart-drawer ").removeClass("is-empty"),
                            $("cart-drawer ").html(htm),
                            that.find("span").show(),
                            that.find(".loading-overlay__spinner").addClass("hidden"),
                            $(".modal").removeClass("is-visible"),
                            that.hasClass("propage") && $("cart-drawer").addClass("animate active"),
                            $(".carousel_upsell").owlCarousel({
                                margin: 10,
                                nav: !1,
                                autoplayTimeout: 3500,
                                autoplayHoverPause: !0,
                                items: 1,
                                stagePadding: 40
                            })
                    },
                    error: function (err) {
                        console.log(err),
                            that.find("span").show(),
                            that.find(".loading-overlay__spinner").addClass("hidden")
                    }
                }) : $.ajax({
                    type: "GET",
                    url: `${routes.cart_url}?view=rendercart`,
                    success: function (htm) {
                        $("#CartDrawer-CartItems").html(htm),
                            that.find("span").show(),
                            that.find(".loading-overlay__spinner").addClass("hidden"),
                            $(".modal").removeClass("is-visible"),
                            that.hasClass("propage") && $("cart-drawer").addClass("animate active"),
                            $(".carousel_upsell").owlCarousel({
                                margin: 10,
                                nav: !1,
                                autoplayTimeout: 3500,
                                autoplayHoverPause: !0,
                                items: 1,
                                stagePadding: 40
                            })
                    },
                    error: function (err) {
                        console.log(err),
                            that.find("span").show(),
                            that.find(".loading-overlay__spinner").addClass("hidden")
                    }
                }),
                jQuery.getJSON("/cart.js", function (cart) {
                    if ($(".cart-count-bubble")[0])
                        $(".cart-count-bubble span").html(cart.item_count);
                    else {
                        var dt = '<div class="cart-count-bubble"><span aria-hidden="true">' + cart.item_count + '</span><span class="visually-hidden">' + cart.item_count + " item</span> </div>";
                        $("#cart-icon-bubble").append(dt)
                    }
                    cartLink.click()
                })
        },
        error: function (err) {
            console.log(err),
                that.find("span").show(),
                that.find(".loading-overlay__spinner").addClass("hidden")
        }
    })
}),
$(document).on("click", ".btn.add-upsell-btn-in", function (e) {
    e.preventDefault(),
        e.stopPropagation();
    var that = $(this);
    if (that.hasClass("propage") && $(this).attr("disabled"))
        return;
    const cartLink = document.querySelector("#cart-icon-bubble");
    $(this).find("span").hide(),
        $(this).find(".loading-overlay__spinner").removeClass("hidden");
    var id = $(this).attr("dataid")
        , items = {
            id,
            quantity: 1
        };
    $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: items,
        success: function (res) {
            $("cart-drawer-items").hasClass("is-empty") ? $.ajax({
                type: "GET",
                url: `${routes.cart_url}?view=fullcartdrawer`,
                success: function (htm) {
                    $("cart-drawer ").removeClass("is-empty"),
                        $("cart-drawer ").html(htm),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden"),
                        $(".modal").removeClass("is-visible"),
                        that.hasClass("propage") && $("cart-drawer").addClass("animate active"),
                        $(".carousel_upsell").owlCarousel({
                            margin: 10,
                            nav: !1,
                            autoplayTimeout: 3500,
                            autoplayHoverPause: !0,
                            items: 1,
                            stagePadding: 40
                        })
                },
                error: function (err) {
                    console.log(err),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden")
                }
            }) : $.ajax({
                type: "GET",
                url: `${routes.cart_url}?view=rendercart`,
                success: function (htm) {
                    $("#CartDrawer-CartItems").html(htm),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden"),
                        $(".modal").removeClass("is-visible"),
                        that.hasClass("propage") && $("cart-drawer").addClass("animate active"),
                        $(".carousel_upsell").owlCarousel({
                            margin: 10,
                            nav: !1,
                            autoplayTimeout: 3500,
                            autoplayHoverPause: !0,
                            items: 1,
                            stagePadding: 40
                        })
                },
                error: function (err) {
                    console.log(err),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden")
                }
            }),
                jQuery.getJSON("/cart.js", function (cart) {
                    if ($(".cart-count-bubble")[0])
                        $(".cart-count-bubble span").html(cart.item_count);
                    else {
                        var dt = '<div class="cart-count-bubble"><span aria-hidden="true">' + cart.item_count + '</span><span class="visually-hidden">' + cart.item_count + " item</span> </div>";
                        $("#cart-icon-bubble").append(dt)
                    }
                    cartLink.click()
                })
        },
        error: function (err) {
            console.log(err),
                that.find("span").show(),
                that.find(".loading-overlay__spinner").addClass("hidden")
        }
    })
});
var imagesBundle = []
, imagesBundleVal = [];
$(document).on("click", "li.alphabetical_icon", function () {
if (!$(this).hasClass("vnot_available")) {
    var im = $(this).children("img").attr("src")
        , id = $(this).attr("dataid")
        , price = $(this).attr("dataprice")
        , typeoitemin = $(this).find("img").attr("type_of_necklace")
        , dataproducttitle = $(this).attr("dataproducttitle")
        , ttitle = $(this).attr("datatitle");
    imagesBundle.push({
        image: im,
        id,
        price,
        title: ttitle,
        pkey: dataproducttitle,
        typeoitem: typeoitemin
    }),
        imagesBundleVal.push({
            quantity: 1,
            id
        });
    var productCount = imagesBundle.length - 1;
    if (imagesBundle.length > 0 ? ($(".product-form__submit_builder span").html("ADD TO BASKET"),
        $(".product-form__submit_builder").removeAttr("disabled")) : ($(".product-form__submit_builder span").html("Select Letters"),
            $(".product-form__submit_builder").attr("disabled", "disabled")),
        imagesBundle.length > 5)
        return $(".errormessage_builder").html("<p>Maximum 5 letters allowed</p>"),
            $(".builderChainContent p.fst").html("YOU HAVE REACHED THE MAXIUMUM OF 5 CHARACTERS"),
            setTimeout(function () {
                $(".errormessage_builder").html("")
            }, 2500),
            imagesBundle.splice(5, 1),
            imagesBundleVal.splice(5, 1),
            !0;
    $(".builderChainContent p.fst").html("CLICK ON THE LETTERS"),
        imagesBundle.length == 5 && $(".builderChainContent p.fst").html("YOU HAVE REACHED THE MAXIUMUM OF 5 CHARACTERS");
    var startPosition = 6
        , layout = "";
    if (imagesBundle.length % 2 == 0)
        var layout = "even"
            , startPosition = 6 - productCount / 2 + 1;
    else
        var layout = "odd"
            , startPosition = 5.5 - productCount / 2 + 1;
    if (startPosition = Math.floor(startPosition),
        $(".necklacebuilder_value").val(JSON.stringify(imagesBundleVal)),
        $(".necklacebuilder_value_properties").val(JSON.stringify(imagesBundle)),
        $(".builderChainPoint").hide().html(""),
        imagesBundle.length == 1) {
        var variant = imagesBundle[0].id
            , typeoitem = imagesBundle[0].typeoitem
            , variantImage = imagesBundle[0].image;
        $('.builderChainPoint[data-point="6"][data-style="odd"]').attr("typeoitem", typeoitem),
            $('.builderChainPoint[data-point="6"][data-style="odd"]').html('<img src="' + variantImage + '" /><button class="remove_selected_from_builder" dataindex="0" dataid="' + variant + '"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"> <rect x="0.890625" y="0.589844" width="19" height="19" rx="9.5" fill="white" stroke="#252525"/> <path d="M7.25391 6.94727L13.5393 13.2327" stroke="#252525"/> <path d="M13.543 6.94531L7.25757 13.2307" stroke="#252525"/> </svg></button>')
    } else
        $.each(imagesBundle, function (index) {
            var variant2 = imagesBundle[index].id
                , typeoitem2 = imagesBundle[index].typeoitem
                , variantImage2 = imagesBundle[index].image;
            $(".builderChainPoint[data-point=" + startPosition + "][data-style=" + layout + "]").attr("typeoitem", typeoitem2),
                $(".builderChainPoint[data-point=" + startPosition + "][data-style=" + layout + "]").html('<img src="' + variantImage2 + '" /><button class="remove_selected_from_builder" dataindex="' + index + '" dataid="' + variant2 + '"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"> <rect x="0.890625" y="0.589844" width="19" height="19" rx="9.5" fill="white" stroke="#252525"/> <path d="M7.25391 6.94727L13.5393 13.2327" stroke="#252525"/> <path d="M13.543 6.94531L7.25757 13.2307" stroke="#252525"/> </svg></button>'),
                startPosition++
        });
    let heartsLength = imagesBundle.filter(v => v.pkey === "heart")
        , balloonsLength = imagesBundle.filter(v => v.pkey === "balloon")
        , silverLength = imagesBundle.filter(v => v.pkey === "silver");
    $(".letters_pricing.heart .nmbs").html(heartsLength.length);
    var priceheart = 0;
    heartsLength && heartsLength.length > 0 && heartsLength[0].price && ($(".letters_pricing.heart .prcing").html(heartsLength[0].price),
        priceheart = heartsLength[0].price.replace("\xA3", "")),
        $(".letters_pricing.balloon .nmbs").html(balloonsLength.length);
    var priceballoon = 0;
    balloonsLength && balloonsLength.length > 0 && balloonsLength[0].price && (priceballoon = balloonsLength[0].price.replace("\xA3", ""),
        $(".letters_pricing.balloon .prcing").html(balloonsLength[0].price)),
        $(".letters_pricing.silver .nmbs").html(silverLength.length);
    var pricesilver = 0;
    silverLength && silverLength.length > 0 && silverLength[0].price && (pricesilver = silverLength[0].price.replace("\xA3", ""),
        $(".letters_pricing.silver .prcing").html(silverLength[0].price));
    var baseProductPrice = parseFloat($(".builder_base_price").val())
        , inPrice = price.replace("\xA3", "")
        , lettersPrice = parseFloat(parseFloat(pricesilver) * parseInt(silverLength.length) + parseFloat(priceballoon) * parseInt(balloonsLength.length) + parseFloat(priceheart) * parseInt(heartsLength.length))
        , totalBuilderPrice = baseProductPrice + lettersPrice;
    $(".tprice").html("\xA3" + totalBuilderPrice);
    var selected_products = "<ul>";
    $.each(imagesBundle, function (index) {
        var variant2 = imagesBundle[index].id
            , variantImage2 = imagesBundle[index].image;
        selected_products += '<li><img src="' + variantImage2 + '"><button class="remove_selected_from_builder"  dataindex="' + index + '" dataid="' + variant2 + '">Remove</button></li>'
    }),
        selected_products += "</ul>",
        imagesBundle.length > 0 ? $(".selected_letters_and_pro").addClass("active") : $(".selected_letters_and_pro").removeClass("active"),
        $(".selected_letters_and_pro").html(selected_products),
        setTimeout(function () {
            $(".builderChainPoint").fadeIn(500, function () {
                $(".builderProductAdd").html("Add").removeClass("disabled")
            })
        }, 500)
}
}),
$(document).on("click", ".remove_selected_from_builder", function () {
    $(".builderChainContent p.fst").html("CLICK ON THE LETTERS");
    var idd = $(this).attr("dataid")
        , eindex = $(this).attr("dataindex")
        , price = imagesBundle[0].price;
    imagesBundle.splice(eindex, 1),
        imagesBundleVal.splice(eindex, 1),
        imagesBundle.length > 0 ? ($(".product-form__submit_builder span").html("ADD TO BASKET"),
            $(".product-form__submit_builder").removeAttr("disabled")) : ($(".product-form__submit_builder span").html("Select Letters"),
                $(".product-form__submit_builder").attr("disabled", "disabled"));
    var productCount = imagesBundle.length - 1
        , startPosition = 6
        , layout = "";
    if (imagesBundle.length % 2 == 0)
        var layout = "even"
            , startPosition = 6 - productCount / 2 + 1;
    else
        var layout = "odd"
            , startPosition = 5.5 - productCount / 2 + 1;
    if (startPosition = Math.floor(startPosition),
        $(".necklacebuilder_value").val(JSON.stringify(imagesBundleVal)),
        $(".necklacebuilder_value_properties").val(JSON.stringify(imagesBundle)),
        $(".builderChainPoint").hide().html(""),
        imagesBundle.length == 1) {
        var variant = imagesBundle[0].id
            , typeoitem = imagesBundle[0].typeoitem
            , variantImage = imagesBundle[0].image;
        $('.builderChainPoint[data-point="6"][data-style="odd"]').attr("typeoitem", typeoitem),
            $('.builderChainPoint[data-point="6"][data-style="odd"]').html('<img src="' + variantImage + '" /><button class="remove_selected_from_builder" dataindex="0" dataid="' + variant + '"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"> <rect x="0.890625" y="0.589844" width="19" height="19" rx="9.5" fill="white" stroke="#252525"/> <path d="M7.25391 6.94727L13.5393 13.2327" stroke="#252525"/> <path d="M13.543 6.94531L7.25757 13.2307" stroke="#252525"/> </svg></button>')
    } else
        $.each(imagesBundle, function (index) {
            var variant2 = imagesBundle[index].id
                , variantImage2 = imagesBundle[index].image
                , typeoitem2 = imagesBundle[index].typeoitem;
            $(".builderChainPoint[data-point=" + startPosition + "][data-style=" + layout + "]").attr("typeoitem", typeoitem2),
                $(".builderChainPoint[data-point=" + startPosition + "][data-style=" + layout + "]").html('<img src="' + variantImage2 + '" /><button class="remove_selected_from_builder"  dataindex="' + index + '" dataid="' + variant2 + '"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"> <rect x="0.890625" y="0.589844" width="19" height="19" rx="9.5" fill="white" stroke="#252525"/> <path d="M7.25391 6.94727L13.5393 13.2327" stroke="#252525"/> <path d="M13.543 6.94531L7.25757 13.2307" stroke="#252525"/> </svg></button>'),
                startPosition++
        });
    let heartsLength = imagesBundle.filter(v => v.pkey === "heart")
        , balloonsLength = imagesBundle.filter(v => v.pkey === "balloon")
        , silverLength = imagesBundle.filter(v => v.pkey === "silver");
    $(".letters_pricing.heart .nmbs").html(heartsLength.length);
    var priceheart = 0;
    heartsLength && heartsLength.length > 0 && heartsLength[0].price && ($(".letters_pricing.heart .prcing").html(heartsLength[0].price),
        priceheart = heartsLength[0].price.replace("\xA3", "")),
        $(".letters_pricing.balloon .nmbs").html(balloonsLength.length);
    var priceballoon = 0;
    balloonsLength && balloonsLength.length > 0 && balloonsLength[0].price && (priceballoon = balloonsLength[0].price.replace("\xA3", ""),
        $(".letters_pricing.balloon .prcing").html(balloonsLength[0].price)),
        $(".letters_pricing.silver .nmbs").html(silverLength.length);
    var pricesilver = 0;
    silverLength && silverLength.length > 0 && silverLength[0].price && (pricesilver = silverLength[0].price.replace("\xA3", ""),
        $(".letters_pricing.silver .prcing").html(silverLength[0].price));
    var baseProductPrice = parseFloat($(".builder_base_price").val())
        , inPrice = price.replace("\xA3", "")
        , lettersPrice = parseFloat(parseFloat(pricesilver) * parseInt(silverLength.length) + parseFloat(priceballoon) * parseInt(balloonsLength.length) + parseFloat(priceheart) * parseInt(heartsLength.length))
        , totalBuilderPrice = baseProductPrice + lettersPrice;
    $(".tprice").html("\xA3" + totalBuilderPrice);
    var selected_products = "<ul>";
    $.each(imagesBundle, function (index) {
        var variant2 = imagesBundle[index].id
            , variantImage2 = imagesBundle[index].image;
        selected_products += '<li><img src="' + variantImage2 + '"><button class="remove_selected_from_builder" dataindex="' + index + '" dataid="' + variant2 + '">Remove</button></li>'
    }),
        selected_products += "</ul>",
        imagesBundle.length > 0 ? $(".selected_letters_and_pro").addClass("active") : $(".selected_letters_and_pro").removeClass("active"),
        $(".selected_letters_and_pro").html(selected_products),
        setTimeout(function () {
            $(".builderChainPoint").fadeIn(500, function () {
                $(".builderProductAdd").html("Add").removeClass("disabled")
            })
        }, 500)
}),
$(".product-form__submit_builder").click(function (e) {
    e.preventDefault(),
        e.stopPropagation();
    var that = $(this);
    if (that.hasClass("propage") && $(this).attr("disabled"))
        return;
    var itemsss = $(".necklacebuilder_value").val()
        , id = $(this).attr("dataid")
        , items_f = [];
    if (itemsss && (items_f = JSON.parse(itemsss)),
        items_f.length == 0)
        return;
    const cartLink = document.querySelector("#cart-icon-bubble");
    $(this).find("span").hide(),
        $(this).find(".loading-overlay__spinner").removeClass("hidden");
    var current_product_value = $(".current_product_value").val()
        , items_properties = $(".necklacebuilder_value_properties").val()
        , items_properties_json = JSON.parse(items_properties)
        , titleArray = items_properties_json.map(function (el) {
            return el.title
        });
    let titleString = titleArray.toString();
    var current_pro = {
        id: current_product_value,
        quantity: 1,
        properties: {
            letters_order: titleString
        }
    };
    items_f.push(current_pro);
    // var data = {
    //     items: items_f
    // };
    var data = {
        items: [].push(
            {
                id: '7978911662168',
                quantity: 1,
                properties: {
                    letters_order: 'T,S'
                }
            }
        )
    };
    $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data,
        success: function (res) {
            $("cart-drawer-items").hasClass("is-empty") ? $.ajax({
                type: "GET",
                url: `${routes.cart_url}?view=fullcartdrawer`,
                success: function (htm) {
                    $("cart-drawer ").removeClass("is-empty"),
                        $("cart-drawer ").html(htm),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden"),
                        $(".modal").removeClass("is-visible"),
                        that.hasClass("propage") && $("cart-drawer").addClass("animate active"),
                        $(".carousel_upsell").owlCarousel({
                            margin: 10,
                            nav: !1,
                            autoplayTimeout: 3500,
                            autoplayHoverPause: !0,
                            items: 1,
                            stagePadding: 40
                        })
                },
                error: function (err) {
                    console.log(err),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden")
                }
            }) : $.ajax({
                type: "GET",
                url: `${routes.cart_url}?view=rendercart`,
                success: function (htm) {
                    $("#CartDrawer-CartItems").html(htm),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden"),
                        $(".modal").removeClass("is-visible"),
                        that.hasClass("propage") && $("cart-drawer").addClass("animate active"),
                        $(".carousel_upsell").owlCarousel({
                            margin: 10,
                            nav: !1,
                            autoplayTimeout: 3500,
                            autoplayHoverPause: !0,
                            items: 1,
                            stagePadding: 40
                        })
                },
                error: function (err) {
                    console.log(err),
                        that.find("span").show(),
                        that.find(".loading-overlay__spinner").addClass("hidden")
                }
            }),
                jQuery.getJSON("/cart.js", function (cart) {
                    if ($(".cart-count-bubble")[0])
                        $(".cart-count-bubble span").html(cart.item_count);
                    else {
                        var dt = '<div class="cart-count-bubble"><span aria-hidden="true">' + cart.item_count + '</span><span class="visually-hidden">' + cart.item_count + " item</span> </div>";
                        $("#cart-icon-bubble").append(dt)
                    }
                    cartLink.click()
                })
        },
        error: function (err) {
            console.log(err),
                that.find("span").show(),
                err && err.responseJSON && err.responseJSON.description && ($(".product-form__submit_builder").after('<p class="error">' + err.responseJSON.description + "</p>"),
                    setTimeout(function () {
                        $(".error").remove()
                    }, 2500)),
                that.find(".loading-overlay__spinner").addClass("hidden")
        }
    })
}),
$(document).ready(function () {
    window.location.href.includes("heartletters=true") && $('li.tab-link[data-tab="builder_tabstabcontent-2"]').click(),
        window.location.href.includes("goldletters=true") && $('li.tab-link[data-tab="builder_tabstabcontent-3"]').click();
    var drawerRight = $(".ele_cart-drawer-right")
        , cart_list = $(".drawer_open_builder");
    cart_list.click(function () {
        $(this).toggleClass("active");
        var st = $(this).attr("atr");
        $(".common_status_manage").hide(),
            st == "delivery_returns" ? $(".drawer_deliverycontent").show() : st == "inspiration" ? $(".drawer_inspiration").show() : st == "edit_necklacebuilder" ? $(".drawer_edit_necklacebuilder").show() : $(".drawer_description").show(),
            $("#ol").toggleClass("overlay_drawer"),
            $("body").toggleClass("ele_cart-drawer-pushtoleft"),
            drawerRight.toggleClass("ele_cart-drawer-open")
    }),
        $(document).on("click", ".overlay_drawer, .ele_cart-drawer-close-btn, .ele_cart-drawer-close-back", function () {
            $("#ol").removeClass("overlay_drawer"),
                $("body").removeClass("ele_cart-drawer-pushtoleft"),
                drawerRight.removeClass("ele_cart-drawer-open")
        })
});