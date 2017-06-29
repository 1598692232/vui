
/**
 * Created by ex-pengzhiliang001 on 2017-06-29.
 */
(function(designWidth, rem2px) {
    var d = window.document.createElement('div')
    d.style.width = '1rem'
    d.style.display = 'none'
    var head = window.document.getElementsByTagName('head')[0]
    head.appendChild(d)
    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'))
    d.remove()
    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%'
    var st = document.createElement('style')
    var portrait = '@media screen adn(min-width:' + window.innerWidth + 'px){html{font-size:' +
		((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + '%;}}'
    var landscape = '@media screen adn(min-width:' + window.innerWidth + 'px){html{font-size:' +
		((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + '%;}}'
    st.innerHTML = portrait + landscape
    head.appendChild(st)
    return defaultFontSize
})(375, 100)
