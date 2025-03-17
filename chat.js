// Function to Toggle Chatbot Visibility
function toggleChat() {
    let chatbot = document.getElementById("chatbot");
    chatbot.style.display = (chatbot.style.display === "block") ? "none" : "block";
}

// Function to Send a Message
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBody = document.getElementById("chat-body");

    if (userInput.trim() === "") return;

    // Display user message
    let userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
    chatBody.innerHTML += userMessage;

    // Get bot response
    let botResponse = getBotResponse(userInput);
    chatBody.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;

    // Clear input field
    document.getElementById("user-input").value = "";

    // Scroll to the latest message
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to Handle "Enter" Key Press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to Generate Bot Response
function getBotResponse(input) {
    let lowerInput = input.toLowerCase();

    // Stitching Services
    if (lowerInput.includes("stitching") || lowerInput.includes("tailoring") || lowerInput.includes("alteration")) {
        return "We offer **custom stitching, blouse stitching, pant alterations, and traditional dress making.** Our expert tailors ensure a perfect fit! 👗✂️";
    }
    
    // Dress Sales & Collections
    else if (lowerInput.includes("sales") || lowerInput.includes("buy") || lowerInput.includes("purchase") || lowerInput.includes("collection")) {
        return "We have **an exclusive collection of sarees, salwar suits, lehengas, and men's ethnic wear.** Visit our store or browse online for the latest designs! 🛍️";
    }

    // Dry Cleaning Services
    else if (lowerInput.includes("dry cleaning") || lowerInput.includes("laundry") || lowerInput.includes("wash")) {
        return "We provide **premium dry cleaning services** for all types of fabrics, including silk and heavy embroidery dresses. Your outfits will look as good as new! ✨";
    }

    // Store Hours & Location
    else if (lowerInput.includes("timing") || lowerInput.includes("working hours") || lowerInput.includes("open") || lowerInput.includes("location")) {
        return "📍 We are open **Monday to Sunday from 9:00 AM to 9:00 PM.** Our store is located in Aranthangi. Visit us for the best shopping experience!";
    }

    // Payment Methods
    else if (lowerInput.includes("payment") || lowerInput.includes("pay") || lowerInput.includes("mode of payment")) {
        return "We accept **Cash, Debit/Credit Cards, UPI (Google Pay, PhonePe, Paytm), and Online Payments via Stripe.** Secure transactions are our priority! ✅💳";
    }

    // Discounts & Offers
    else if (lowerInput.includes("offer") || lowerInput.includes("discount") || lowerInput.includes("sale")) {
        return "🎉 We have special **seasonal discounts, festival sales, and loyalty rewards.** Visit our store or check online to grab the best deals!";
    }

    // Delivery Services
    else if (lowerInput.includes("delivery") || lowerInput.includes("home delivery") || lowerInput.includes("shipping")) {
        return "🚚 Yes! We provide **home delivery for all online purchases.** Delivery time depends on location, usually 3-5 business days.";
    }

    // Customization Services
    else if (lowerInput.includes("custom") || lowerInput.includes("alter") || lowerInput.includes("modification")) {
        return "👗 We specialize in **customized stitching, fitting adjustments, and dress modifications.** Bring your ideas, and we'll make them reality!";
    }

    // Fabric Types Available
    else if (lowerInput.includes("fabric") || lowerInput.includes("materials") || lowerInput.includes("cloth type")) {
        return "We offer a variety of **premium fabrics** like **silk, cotton, chiffon, georgette, velvet, organza, and more.** Each fabric is carefully selected for quality!";
    }

    // Return & Exchange Policy
    else if (lowerInput.includes("return") || lowerInput.includes("exchange") || lowerInput.includes("refund")) {
        return "🛍️ **Return Policy:** You can exchange unused products within **7 days** of purchase with a valid bill. No cash refunds, only store credit/exchange.";
    }

    // Price Range
    else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("rate")) {
        return "Our dresses range from **₹500 to ₹10,000**, depending on fabric, design, and customization. Custom stitching starts at **₹800**.";
    }

    // Contact Information
    else if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("call")) {
        return "📞 You can contact us at **+91 98765 43210** or email us at **support@mkmatchingcenter.com** for any queries!";
    }

    // General Greeting
    else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        return "Hello! 😊 Welcome to **M.K. Matching Center.** How can I assist you today?";
    }

    // Default Response
    else {
        return "I'm here to help! 😊 Ask me about our **stitching, sales, dry cleaning, store hours, payment methods, offers, delivery, fabrics, and more.**";
    }
}

// Dragging Feature for Chatbot
let chatbot = document.getElementById("chatbot");
let chatHeader = document.getElementById("chat-header");

let offsetX, offsetY, isDragging = false;

chatHeader.addEventListener("mousedown", function(event) {
    isDragging = true;
    chatbot.classList.add("dragging");

    offsetX = event.clientX - chatbot.getBoundingClientRect().left;
    offsetY = event.clientY - chatbot.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function(event) {
    if (isDragging) {
        chatbot.style.left = `${event.clientX - offsetX}px`;
        chatbot.style.top = `${event.clientY - offsetY}px`;
        chatbot.style.position = "absolute";
    }
});

document.addEventListener("mouseup", function() {
    isDragging = false;
    chatbot.classList.remove("dragging");
});
