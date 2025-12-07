from playwright.sync_api import sync_playwright

def verify_cognito_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()

        print("Navigating to home page...")
        page.goto("http://localhost:3000")

        # Wait for page load
        page.wait_for_load_state("networkidle")

        print("Navigating to Cognito AI project page...")
        # Try to find the Cognito AI card by text or finding the first card if text is hidden
        # The card has "Cognito AI" text.
        page.get_by_text("Cognito AI").first.click()

        # Wait for navigation
        page.wait_for_url("**/projects/cognito-ai")
        print("Navigation successful.")

        # Wait for animations to settle (approx 2 seconds for entrance animations)
        page.wait_for_timeout(3000)

        print("Taking screenshot...")
        page.screenshot(path="verification/cognito_page.png")

        browser.close()

if __name__ == "__main__":
    verify_cognito_page()
